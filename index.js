#!/usr/bin/env node

async function printPokeMoves(pokemonMoves) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonMoves}`);
  const pokemon = await response.json();
  const moves = pokemon.moves.map(({ move }) => move.name);

  console.log(moves.slice(0, 5));
}

printPokeMoves("pikachu");
