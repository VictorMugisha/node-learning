#!/usr/bin/env node

const yargs = require("yargs");
const { argv } = yargs(process.argv)

console.log(argv.pokemon)

async function printPokeMoves(pokemonMoves) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonMoves}`);
  const pokemon = await response.json();
  const moves = pokemon.moves.map(({ move }) => move.name);

  console.log(moves.slice(0, 5));
}

printPokeMoves(argv.pokemon);
