import React from "react";
import { useNavigate } from "react-router-dom";

import styles from "./Home.module.css";
import MuteButton from "../../components/common/MuteButton";

import { MdLocationPin } from "react-icons/md";
import { FaHeart, FaGift } from "react-icons/fa6";
import { PiDressFill } from "react-icons/pi";

const Home = () => {
    const navigate = useNavigate();

    const handleWhatsappClick = () => {
        const message = "Olá, confirmo minha presença no evento!";
        const whatsappUrl = `https://wa.me/5581992437385?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    };

    const handleMapsClick = () => {
        const address = "Rua Major João Coelho, 25b, Caruaru, PE";
        const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
        window.open(mapsUrl, '_blank');
    };

    const handleDressCodeClick = () => {
        navigate('/dress_code');
    };

    const handlePresentesClick = () => {
        navigate('/presentes');
    };

    return (
        <div>
            <div className={styles.background} />
            <MuteButton />
            <main className={styles.container}>
                <div className={styles.buttonsContainer}>
                    <button className={styles.actionButton} onClick={handleWhatsappClick}>
                        <div className={styles.iconContainer}>
                            <FaHeart className={styles.icon} />
                        </div>
                        <span className={styles.buttonText}>Confirmar <br /> Presença</span>
                    </button>
                    
                    <button className={styles.actionButton} onClick={handleMapsClick}>
                        <div className={styles.iconContainer}>
                            <MdLocationPin className={styles.icon} />
                        </div>
                        <span className={styles.buttonText}>Ver <br /> Rota</span>
                    </button>
                    
                    <button className={styles.actionButton} onClick={handleDressCodeClick}>
                        <div className={styles.iconContainer}>
                            <PiDressFill className={styles.icon} />
                        </div>
                        <span className={styles.buttonText}>Dress <br /> Code</span>
                    </button>
                    
                    <button className={styles.actionButton} onClick={handlePresentesClick}>
                        <div className={styles.iconContainer}>
                            <FaGift className={styles.icon} />
                        </div>
                        <span className={styles.buttonText}>Lista de <br /> Presentes</span>
                    </button>
                </div>
            </main>
        </div>
    )
};

export default Home;