import { ReactNode, useEffect, useState } from "react"
import PokemonContext from "./PokemonContext";
import { Pokemon, PokemonDetails } from "../types/Pokemon";

export const POKE_URL = 'https://pokeapi.co/api/v2/pokemon'; //?offset=&limit=151

type Props = {
    children: ReactNode
}

const PokemonProvider = ({children}: Props) => {
    
    
    const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
    const [pokedex, setPokedex] = useState<PokemonDetails[]>([]);
    
    useEffect(()=>{
        async function fetchPokemon(url: string) {
            const result = await fetch(url);
            const json = await result.json();
            setPokemonList(json.results);
        }
        
        fetchPokemon(`${POKE_URL}/?offset=&limit=151`);
    }, []);
    
    
    return (
        <PokemonContext.Provider value={{pokemonList, setPokemonList, pokedex, setPokedex}} >
        {children}
        </PokemonContext.Provider>
        )
    }
    
    export default PokemonProvider;