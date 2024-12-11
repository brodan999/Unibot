import React, { useState } from 'react';
import axios from 'axios';
import { Container, TextField, Button, Paper, Box, List, ListItem, ListItemText } from '@mui/material';

// Komponen utama Chatbot
const Chatbot = () => {
    const [input, setInput] = useState(''); // Menyimpan input pengguna
    const [messages, setMessages] = useState([]); // Menyimpan daftar pesan

    // Fungsi untuk memformat waktu
    const formatTime = (date) => {
        return `${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}`;
    };

    // Fungsi untuk mengirim pesan
    const sendMessage = async () => {
        if (!input) return;  // Mencegah pengiriman pesan kosong

        const timestamp = new Date(); // Mendapatkan waktu saat ini
        const userMessage = { user: input, time: formatTime(timestamp) }; // Membuat objek pesan pengguna
        setMessages((prev) => [...prev, userMessage]); // Menambahkan pesan pengguna ke daftar pesan

        const currentInput = input; // Menyimpan input sebelum mengosongkan
        setInput(''); // Mengosongkan input field

        try {
            // Mengirim pesan ke server dan mendapatkan balasan
            const response = await axios.post('http://localhost:5000/chat', { message: currentInput });
            const botMessage = { bot: response.data.response, time: formatTime(new Date()) }; // Membuat objek pesan bot
            setMessages((prev) => [...prev, botMessage]); // Menambahkan pesan bot ke daftar pesan
        } catch (error) {
            console.error('Error sending message:', error); // Menangani error
        }
    };

    return (
        <Container
            className="container"
            maxWidth="lg"
            style={{ backgroundColor: '#000', borderRadius: '15px', padding: '16px', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)' }}
        >
            <Paper
                className="paper"
                elevation={3}
                style={{ padding: '24px', height: '400px', overflowY: 'auto', borderRadius: '15px', backgroundColor: '#323232' }}
            >
                <List>
                    {messages.map((msg, index) => (
                        <ListItem key={index} style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '8px' }}>
                            {msg.user ? (
                                <ListItemText
                                    className="user-message"
                                    primary={`${msg.user}`}
                                    secondary={msg.time} // Menampilkan waktu untuk pesan pengguna
                                    style={{ flex: '0 1 auto' }}
                                />
                            ) : (
                                <ListItemText
                                    className="bot-message"
                                    primary={`${msg.bot}`}
                                    secondary={msg.time} // Menampilkan waktu untuk pesan bot
                                    style={{ flex: '0 1 auto' }}
                                />
                            )}
                        </ListItem>
                    ))}
                </List>
            </Paper>
            <Box className="input-container">
                <TextField
                    className="text-field"
                    variant="outlined"
                    fullWidth
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' ? sendMessage() : null}
                    placeholder="Type a message..."
                />
                <Button className="button" variant="contained" onClick={sendMessage} style={{ marginLeft: '8px' }}>
                    Send
                </Button>
            </Box>
        </Container>
    );
};

export default Chatbot;
