import React from "react";
import Logo from "./Logo";
import BestPokemon from "./BestPokemon";
import CaughtPokemon from "./CaughtPokemon";
const App = () => {
  return (
    <div className="mainContainer">
      <div className="header">
        <Logo appName="Pokedex" />
      </div>
      <BestPokemon
        name="Squirtle"
        colour="yellow"
        abilities={["Anticipation ", "Adaptability ", "Run-Away"]}
      />
      <CaughtPokemon date={new Date().toLocaleDateString()} />
    </div>
  );
};

export default App;
