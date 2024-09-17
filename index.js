#!/usr/bin/env node

const inquirer = require("inquirer");

async function printPokeMoves(pokemonMoves) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonMoves}`);
  const pokemon = await response.json();
  const moves = pokemon.moves.map(({ move }) => move.name);

  console.log(moves.slice(0, 5));
}

const prompt = inquirer.createPromptModule()
prompt([{
    type: "input",
    name: "pokemon",
    message: "Enter a pokemon name: ",
}]).then((answers) => {
    const pokemon = answers.pokemon
    printPokeMoves(pokemon);
})

