import React from "react";
const BestPokemon = (props) => {
  return (
    <div className="bodyContainer">
      <p>
        My favorite Pokémon is {props.name}, it's colour is {props.colour} and
        it has abilities of:
      </p>
      <ul>
        {props.abilities.map((ability, index) => (
          <li key={index}>{ability}</li>
        ))}
      </ul>
    </div>
  );
};
export default BestPokemon;
