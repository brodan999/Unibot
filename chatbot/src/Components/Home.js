import React from 'react';
import { useNavigate } from 'react-router-dom';
import RobotImage from '../Assets/BotWisuda.png';
import logoMercu from '../Assets/mercu.png';
import logoBSI from '../Assets/BSI.png';
import logoBinus from '../Assets/binus.png';
import logoTrisakti from '../Assets/trisakti.png';
import logoEsaunggul from '../Assets/Esaunggul.png';
import logoUPH from '../Assets/UPH.png';
import logoUniji from '../Assets/Uniji.png';
import logoPrasmul from '../Assets/Prasmul.png';
import logoUMJ from '../Assets/UMJ.png';
import logoPodomoro from '../Assets/Podomoro.png';
import logoBL from '../Assets/BL.png';
import logoUTA from '../Assets/UTA.png';
import logoUbakrie from '../Assets/Ubakrie.png';
import logoMoestopo from '../Assets/Moestopo.png';
import logoUAI from '../Assets/UAI.png';
import logoUntar from '../Assets/untar2.png';


    const Home = () => {
        const navigate = useNavigate()
        return (
            <div>
                <main>
                    <div className="content">
                        <h1><span className="highlight">Unibot AI.</span><br />Recommendation system</h1>
                        <p>Selamat Datang di Unibot! Unibot memiliki 76 universitas pada wilayah Jakarta yang terdaftar dalam PDDIKTI, dengan memanfaatkan algoritma Long Short-Term Memory (LSTM) Unibot siap untuk membantuk kalian memberikan informasi terkait Universitas. Klik Start Chat untuk melakukan interaksi dengan Unibot</p>
                        <div className="line"></div>
                        <button onClick={() => navigate ('/Chatbot')} className="start-chat">Start Chat</button>
                    </div>
                    <div className="robot">
                        <img src={RobotImage} alt="Gambar Robot" />
                    </div>
                </main>
                <footer>
                    <div className="partners">
                    <img src={logoUntar} alt="Untar Logo" />
                    <img src={logoMercu} alt="Mercu Logo" />
                    <img src={logoBSI} alt="BSI Logo" />
                    <img src={logoBinus} alt="Binus Logo" />
                    <img src={logoTrisakti} alt="Trisakti Logo" />
                    <img src={logoEsaunggul} alt="Esa Unggul Logo" />
                    <img src={logoUPH} alt="UPH Logo" />
                    <img src={logoUniji} alt="Uniji Logo" />
                    <img src={logoPrasmul} alt="Prasmul Logo" />
                    <img src={logoUMJ} alt="UMJ Logo" />
                    <img src={logoPodomoro} alt="Podomoro Logo" />
                    <img src={logoBL} alt="BL Logo" />
                    <img src={logoUTA} alt="UTA Logo" />
                    <img src={logoUbakrie} alt="Ubakrie Logo" />
                    <img src={logoMoestopo} alt="Moestopo Logo" />
                    <img src={logoUAI} alt="UAI Logo" />
                    </div>
                    <p>Created by @Ardannm</p>
                </footer>
            </div>
        );
    };
export default Home;