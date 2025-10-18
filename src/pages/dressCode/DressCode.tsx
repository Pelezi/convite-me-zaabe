import React from "react";
import { useNavigate } from "react-router-dom";

import styles from "./DressCode.module.css";
import Button from "../../components/common/Button";

const DressCode = () => {
    const navigate = useNavigate();

    const handleSkip = () => {
        navigate("/home");
    };

    return (
        <div>
            <div className={styles.background} />
            <div className={styles.skipButton}>
                <Button onClick={handleSkip} transparent>
                    X
                </Button>
            </div>
        </div>
    )
};

export default DressCode;