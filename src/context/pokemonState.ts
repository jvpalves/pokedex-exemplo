import { Pokemon } from "../types/Pokemon"

export type PokemonStateType = {
    pokemonList: Pokemon[]
}


export const pokemonState: PokemonStateType = {
    pokemonList: []
}