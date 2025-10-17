import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

import styles from "./Intro.module.css";
import Button from "../../components/common/Button";

import IntroVideo from "../../Assets/video/envelope.mp4";

const Intro = () => {
    const navigate = useNavigate();
    const videoRef = useRef<HTMLVideoElement>(null);

    const handleVideoEnd = () => {
        navigate("/home");
    };

    const handleSkip = () => {
        navigate("/home");
    };

    const handleScreenClick = () => {
        if (videoRef.current) {
            videoRef.current.play();
        }
    };

    return (
        <div className={styles.container} onClick={handleScreenClick}>
            <div className={styles.backgroundVideo}>
                <video ref={videoRef} onEnded={handleVideoEnd}>
                    <source src={IntroVideo} type="video/mp4" />
                </video>
            </div>
            <div className={styles.skipButton}>
                <Button onClick={handleSkip} transparent>
                    Pular
                </Button>
            </div>
        </div>
    )
};

export default Intro;