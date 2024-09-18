import React, { useEffect, useState } from 'react';
import './WordFlicker.css'; 

const WordFlicker = () => {
    const words = ['A MERN Stack Developer', 'A FULL Stack Developer'];
    const [displayedWord, setDisplayedWord] = useState('');
    const [index, setIndex] = useState(0);
    const [offset, setOffset] = useState(0);
    const [forwards, setForwards] = useState(true);
    const skipDelay = 15;
    const speed = 300;

    useEffect(() => {
        const interval = setInterval(() => {
            if (forwards) {
                if (offset < words[index].length) {
                    setDisplayedWord(words[index].substr(0, offset + 1));
                    setOffset((prev) => prev + 1);
                } else {
                    setForwards(false);
                }
            } else {
                if (offset > 0) {
                    setDisplayedWord(words[index].substr(0, offset - 1));
                    setOffset((prev) => prev - 1);
                } else {
                    setForwards(true);
                    setIndex((prev) => (prev + 1) % words.length);
                }
            }
        }, speed);

        return () => clearInterval(interval); 
    }, [forwards, index, offset, words]);

    return (
        <div className="word">
            {displayedWord}
        </div>
    );
};

export default WordFlicker;
