import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import styles from "./Presentes.module.css";
import Button from "../../components/common/Button";
import MuteButton from "../../components/common/MuteButton";

import { FaPix } from "react-icons/fa6";

const Presentes = () => {
    const navigate = useNavigate();

    const handleSkip = () => {
        navigate("/home");
    };

    const handlePresentesClick = async () => {
        const textToCopy = "81999999999";
        
        try {
            await navigator.clipboard.writeText(textToCopy);
            toast.success("PIX copiado para a área de transferência!");
        } catch (err) {
            console.error('Erro ao copiar para a área de transferência:', err);
            toast.error("Erro ao copiar PIX. Tente novamente.");
        }
    };

    return (
        <div>
            <div className={styles.background} />
            <MuteButton />
            <div className={styles.skipButton}>
                <Button onClick={handleSkip} transparent>
                    X
                </Button>
            </div>
            <main className={styles.container}>
                <div className={styles.buttonsContainer}>
                    <button className={styles.actionButton} onClick={handlePresentesClick}>
                        <div className={styles.iconContainer}>
                            <FaPix className={styles.icon} />
                        </div>
                    </button>
                </div>
            </main>
        </div>
    )
};

export default Presentes;