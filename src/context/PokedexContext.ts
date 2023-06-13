import { Dispatch, SetStateAction, createContext } from "react";
import { Pokemon } from "../types/Pokemon";

export type GlobalContent = {
    pokemonList: Pokemon[],
    setPokemonList: Dispatch<SetStateAction<never[]>>
}

const PokemonContext = createContext<GlobalContent>({
    pokemonList: [],
    setPokemonList: ()=>{[]},
});

export default PokemonContext;