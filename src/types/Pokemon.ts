export type Pokemon = {
    name: string,
    url: string
};

export type PokemonStats = {
    hp: number,
    attack: number,
    specialAttack: number,
    defense: number,
    specialDefense: number,
    speed: number
}

export type PokemonDetails = {
    id: number,
    name: string,
    ability: string,
    baseExperience: number,
    height: number,
    sprite: string,
    type: string,
    stats?: PokemonStats
}