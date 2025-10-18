import React from 'react';
import { useAudio } from '../../../contexts/AudioContext';
import styles from './MuteButton.module.css';

import { FaVolumeUp, FaVolumeMute } from 'react-icons/fa';

const MuteButton: React.FC = () => {
    const { isMuted, toggleMute, isPlaying } = useAudio();

    if (!isPlaying) {
        return null; // Don't show button if audio hasn't started yet
    }

    return (
        <button className={styles.muteButton} onClick={toggleMute}>
            {isMuted ? <FaVolumeMute size={20} /> : <FaVolumeUp size={20} />}
        </button>
    );
};

export default MuteButton;