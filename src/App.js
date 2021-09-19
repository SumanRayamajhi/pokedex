import React from "react";
import Logo from "./Logo";
import BestPokemon from "./BestPokemon";
import CaughtPokemon from "./CaughtPokemon";
const App = () => {
  const logWhenClicked = () => {
    console.log("I have clicked");
  };
  return (
    <div className="mainContainer">
      <div className="header">
        <Logo handleClick={logWhenClicked} appName="Pokedex" />
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
