import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { GameDescription } from "../game-description";
import { GameBuy } from "../game-buy";
import { GameCover } from "../game-cover/game-cover";
import { setCurrentGame } from "../../store/games/reducer";
import "./game-item.css";

export const GameItem = ({ game }) => {
  return (
    <div className="game-item">
      <GameCover image={game.image} />
      <div className="game-item__details">
        <span className="game-item__title">{game.title}</span>
        <div className="game-item__genre">
          <GameDescription description={game.description} key={game.description} />
        </div>
        <div className="game-item__buy">
          <GameBuy game={game} />
        </div>
      </div>
    </div>
  );
};
