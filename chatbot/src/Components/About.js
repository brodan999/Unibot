import React from 'react';
import ardanImage from '../Assets/dan.png'; // Adjust the path based on file structure

const AboutCard = ({ imageSrc, name, university }) => {
    return (
        <div className="about-card">
            <img alt={`Profile picture of ${name}`} height="150" src={imageSrc} width="150"/>
            <div className="about-content">
                <h3>{name}</h3>
                <p>{university}</p>
            </div>
        </div>
    );
};

const About = () => {
    return (
        <div>
            <AboutCard
                imageSrc={ardanImage}
                name="Mohamad Ardan"
                university="Mahasiswa Universitas Tarumanagara"
            />
            <AboutCard
                imageSrc="https://placehold.co/100x100"
                name="Viny Christanti Mawardi, S.Kom., M.kom"
                university="Dosen Pembimbing"
            />
            <AboutCard
                imageSrc="https://placehold.co/100x100"
                name="Tri Sutrisno, s.Si., M.Sc"
                university="Dosen pendamping"
            />
        </div>
    );
};

export default About;
