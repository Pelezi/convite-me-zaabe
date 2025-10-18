import React, { createContext, useContext, useRef, useState, useEffect } from 'react';

import SkyFullOfStars from '../Assets/audio/SkyFullOfStars.mp3';

interface AudioContextType {
    isPlaying: boolean;
    isMuted: boolean;
    startAudio: () => void;
    toggleMute: () => void;
}

const AudioContext = createContext<AudioContextType | undefined>(undefined);

export const useAudio = () => {
    const context = useContext(AudioContext);
    if (!context) {
        throw new Error('useAudio must be used within an AudioProvider');
    }
    return context;
};

interface AudioProviderProps {
    children: React.ReactNode;
}

export const AudioProvider: React.FC<AudioProviderProps> = ({ children }) => {
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(false);

    useEffect(() => {
        audioRef.current = new Audio(SkyFullOfStars);
        audioRef.current.loop = true;
        audioRef.current.volume = 0.5;

        return () => {
            if (audioRef.current) {
                audioRef.current.pause();
                audioRef.current = null;
            }
        };
    }, []);

    const startAudio = async () => {
        if (audioRef.current && !isPlaying) {
            try {
                audioRef.current.currentTime = 0;
                await audioRef.current.play();
                setIsPlaying(true);
            } catch (error) {
                console.log('Audio autoplay prevented:', error);
            }
        }
    };

    const toggleMute = () => {
        if (audioRef.current) {
            if (isMuted) {
                audioRef.current.volume = 0.5;
                setIsMuted(false);
            } else {
                audioRef.current.volume = 0;
                setIsMuted(true);
            }
        }
    };

    const contextValue: AudioContextType = {
        isPlaying,
        isMuted,
        startAudio,
        toggleMute,
    };

    return (
        <AudioContext.Provider value={contextValue}>
            {children}
        </AudioContext.Provider>
    );
};