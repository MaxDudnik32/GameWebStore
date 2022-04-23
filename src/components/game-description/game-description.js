import React from 'react';
import './game-description.css';

export const GameDescription = ({ description = '' }) => {
    return <span className="game-description">{ description }</span>
}
