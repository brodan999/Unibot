import React from 'react';
import RobotImage from '../Assets/BotWisuda.png';

function Help() {
    return (
        <main className="unibot-content">
            <section className="unibot-text">
                <h1>Cara Menggunakan:</h1>
                <ol>
                    <li>Klik Home</li>
                    <li>Klik Button Start Chat pada Home Page</li>
                    <li>Berikan pertanyaan Pada Bot</li>
                </ol>
                <h1>Cara Berinteraksi:</h1>
                <ol>
                    <li>Masukan Pertanyaan pada kolom Message</li>
                    <li>Gunakan kata kunci seperti 'fasilitas', 'alamat', atau 'beasiswa' untuk mendapatkan informasi.</li>
                    <li>Klik Send Button atau enter untuk memulai percakapan.</li>
                    <li>Gunakan kalimat yang singkat dan jelas.</li>
                </ol>
                <h1>Jenis Pertanyaan yang Didukung:</h1>
                <ol>
                    <li>Informasi universitas: "Apa saja fakultas di Universitas Tarumanagara?</li>
                    <li>Fasilitas: "Apa fasilitas yang tersedia di Universitas Tarumanagara?</li>
                    <li>Beasiswa: "Apakah Universitas Tarumanagara memiliki beasiswa?"</li>
                </ol>
                <div className="unibot-underline"></div>
            </section>
            <div className="unibot-image">
            <img src={RobotImage} alt="Gambar Robot" />
            </div>
        </main>
    );
}

export default Help;
