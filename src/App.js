import React from "react";
import "./App.css";
import Game from "./components/game/Game.js";
import logoSrc1 from "./assets/images/raccoon.png";
import logoSrc2 from "./assets/images/squirrel.png";
import logoSrc3 from "./assets/images/hound.png";
import logoSrc4 from "./assets/images/bunny.png";

function App(props) {
  const raccoons = {
    name: "Russiaville Raccoons",
    logoSrc: logoSrc1,
  };

  const squirrels = {
    name: "Sheridan Squirrels",
    logoSrc: logoSrc2,
  };

  const bunnies = {
    name: "Burlington Bunnies",
    logoSrc: logoSrc4,
  };

  const hounds = {
    name: "Hammond Hounds",
    logoSrc: logoSrc3,
  };

  return (
    <div className="App">
      <Game
        venue="Union 525 Gem"
        homeTeam={squirrels}
        visitingTeam={raccoons}
      />
      <Game venue="Sheridan Arena" homeTeam={bunnies} visitingTeam={hounds} />
    </div>
  );
}

export default App;
//make sure it has the export default App;
