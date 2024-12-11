# Flask API
from flask import Flask, request, jsonify
from flask_cors import CORS
import numpy as np
from tensorflow.keras.models import load_model
from tensorflow.keras.preprocessing.sequence import pad_sequences
import pickle
import json
import pandas as pd

# Inisialisasi aplikasi Flask
app = Flask(__name__)
CORS(app)  # Ini penting untuk React untuk Mengaktifkan CORS agar API ini bisa diakses oleh aplikasi frontend

# Load semua komponen yang diperlukan
def load_chatbot_components():
    # Load model
    model = load_model('chatbot_model.h5')

    # Load tokenizer
    with open('tokenizer.pickle', 'rb') as handle:
        tokenizer = pickle.load(handle)

    # Load label encoder
    with open('label_encoder.pickle', 'rb') as handle:
        label_encoder = pickle.load(handle)

    # Load model config
    with open('model_config.json', 'r') as f:
        model_config = json.load(f)

    # Load responses
    with open('responses.json', 'r') as f:
        responses = json.load(f)

    return model, tokenizer, label_encoder, model_config, responses

# Memuat komponen chatbot saat server dijalankan
model, tokenizer, label_encoder, model_config, responses = load_chatbot_components()
max_seq_len = model_config['max_seq_len']

def generate_response(user_input):
    # Preprocess input
    user_input = user_input.lower()
    input_sequence = tokenizer.texts_to_sequences([user_input])
    input_padded = pad_sequences(input_sequence, maxlen=max_seq_len, padding='post')

    # Predict tag
    prediction = model.predict(input_padded, verbose=0)
    predicted_tag_index = np.argmax(prediction, axis=-1)[0]
    predicted_tag = label_encoder.inverse_transform([predicted_tag_index])[0]

    # Get confidence score
    confidence = float(np.max(prediction))

    # Get response if confidence is above threshold
    if confidence > 0.8:  # Threshold
        if predicted_tag in responses:
            response_list = responses[predicted_tag]
            return {
                'response': np.random.choice(response_list),
                'confidence': confidence,
                'tag': predicted_tag
            }

    return {
        'response': "Maaf, saya tidak yakin dengan jawaban untuk pertanyaan ini.",
        'confidence': confidence,
        'tag': 'unknown'
    }

@app.route('/chat', methods=['POST'])
def chat():
    try:
        data = request.json
        user_message = data.get('message', '')

        if not user_message:
            return jsonify({'error': 'No message provided'}), 400

        result = generate_response(user_message)

        return jsonify({
            'response': result['response'],
            'confidence': result['confidence'],
            'tag': result['tag']
        })

    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/health', methods=['GET'])
def health_check():
    return jsonify({'status': 'healthy'}), 200

if __name__ == '__main__':
    app.run(debug=True, port=5000)