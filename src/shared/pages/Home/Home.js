import React from "react";
import GameBoard from "../../components/GameBoard/GameBoard";
import "./Home.css";

const Home = function (props) {
  return (
    <div className="Home">
      <div className="Game">
        <GameBoard />
      </div>
    </div>
  );
};

export default Home;
