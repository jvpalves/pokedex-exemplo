import { Dispatch, SetStateAction, createContext } from "react";
import { Pokemon, PokemonDetails } from "../types/Pokemon";

export type GlobalContent = {
    pokemonList: Pokemon[],
    setPokemonList: Dispatch<SetStateAction<Pokemon[]>>
    pokedex: PokemonDetails[],
    setPokedex: Dispatch<SetStateAction<PokemonDetails[]>>
}

const PokemonContext = createContext<GlobalContent>({
    pokemonList: [],
    setPokemonList: ()=>{[]},
    pokedex: [],
    setPokedex: ()=>([]),
});

export default PokemonContext;