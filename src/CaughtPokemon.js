import React, { useState } from "react";
const pokemons = [
  "Pikachu",
  "Charizard",
  "Eevee",
  "Snorlax",
  "Mewtwo",
  "Charmander",
  "Sylveon",
  "Squirtle",
  "Ditto",
  "Bulbasaur",
  "Lucario",
];

const CaughtPokemon = (props) => {
  const random = Math.floor(Math.random() * pokemons.length);
  const [caught, setCaught] = useState([]);

  const catchPokemon = () => {
    setCaught(caught.concat(pokemons[random]));
  };

  return (
    <div className="button">
      <p>
        Caught {caught.length} Pikachhu Pokémon on {props.date}.
      </p>
      <button onClick={catchPokemon}>Catch a Pokemon</button>
      <ul>
        {caught.map((pokemon, index) => (
          <li key={index}>{pokemon}</li>
        ))}
      </ul>
    </div>
  );
};

export default CaughtPokemon;
