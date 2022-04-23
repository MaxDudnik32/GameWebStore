import React from 'react';
import { GameItem } from '../../components/game-item';
import './home-page.css';

const GAMES = [
    {
        image: '/game-covers/forza_5.jpeg',
        title: 'Forza Horizon 5',
        price: 100,
        id: 1,
        description: "Forza Horizon 5 interesting race game",
    },
    {
        image: '/game-covers/battlefield_2042.jpg',
        title: 'Battlefield 2042',
        price: 90,
        id: 2,
        description: 'Battlefield™ 2042 — first view game'
    },
    {
        image: '/game-covers/life_is_strange_true_colors.jpeg',
        title: 'Life is Strange True Colors',
        price: 120,
        id: 3,
        description: 'Life is Strange True Colors - game with an interisting actors.'
    },
    {
        image: '/game-covers/gta_v.jpeg',
        title: 'Grand Theft Auto V',
        price: 20,
        id: 4,
        description: 'Grand Theft Auto V - open world game.'
    },
    {
        image: '/game-covers/rainbow_siege.jpeg',
        title: 'Tom Clancy\'s Rainbow Six® Siege',
        price: 35,
        id: 5,
        description: 'Tom Clancy\'s Rainbow Six Осада – first view game.'
    },
    {
        image: '/game-covers/assassins_creed_valhalla.png',
        title: 'Assassin’s Creed Valhalla',
        price: 115,
        id: 6,
        description: 'Assassin’s Creed Valhalla — online RPG game.'
    },
]

export const HomePage = () => {
    return (
        <div className="home-page">
            { GAMES.map(game => <GameItem game={game} key={game.id}/>) }
        </div>
    )
}
