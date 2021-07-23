import React, { useEffect } from "react"


export async function getStaticProps(context) {

  const pokemons = await fetch("https://pokeapi.co/api/v2/pokedex/2/")
    .then(response => response.json())
    .then(json => json.pokemon_entries);

  return {
    props: {
      pokemons
    }, // will be passed to the page component as props
  }
}

export default function Home(props) {

  const { pokemons } = props;

  

  return (
    <div className="content">
      <h1>Pokedex - Rodrigo</h1>
      <ul>
        {pokemons.map(pokemon => <li key={pokemon.entry_number}>{pokemon.entry_number} - {pokemon.pokemon_species.name}</li>)}
      </ul>
    </div>
  )
}
