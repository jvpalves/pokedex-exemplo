import { ReactElement, useContext, useEffect, useState } from "react";

import { POKE_URL } from "../context/PokemonProvider";
import Header from "../components/Header";
import {History, Location} from 'history';
import { PokemonDetails } from "../types/Pokemon";
import PokemonContext from "../context/PokemonContext";


type MatchParams = {
    name: string,
    params: {id: string}
}

type Props = {
    history: History ,
    match: MatchParams,
    location: Location
}


function PokemonDetail({match: {params: {id}}}: Props): ReactElement {
    const [pokemon, setPokemon] = useState<PokemonDetails>();
    const {setPokedex, pokedex} = useContext(PokemonContext);

    const handleCapturePokemon = (pokemon: PokemonDetails)=>
    {
        if(pokedex.length <=6){
            setPokedex([...pokedex, pokemon]);
            alert('Pokemon captured! Check your pokédex')
        }else{
            alert('You can only have 6 pokemon at your party');
        }
    }
    
    useEffect(()=>{
        async function fetchPokemon(url: string) {
            const result = await fetch(url);
            const json = await result.json();
            console.log(json.sprites);
            setPokemon({
                id: json.id,
                name: json.name,
                ability: json.abilities[0].ability.name,
                baseExperience: json.base_experience,
                height: json.height,
                sprite: json.sprites.other['official-artwork']['front_default'],
                type: json.types[0].type.name,
                stats: {
                    hp: json.stats[0].base_stat,
                    attack: json.stats[1].base_stat,
                    defense: json.stats[2].base_stat,
                    specialAttack: json.stats[3].base_stat,
                    specialDefense: json.stats[4].base_stat,
                    speed: json.stats[5].base_stat
                }
            })
        }
        
        fetchPokemon(`${POKE_URL}/${id}`);
    }, [])
    
    return ( 
        <>
        <Header/>
        <main className="pokemon-detail-container">{pokemon && (
            <>
            <h2>{pokemon.name}</h2>
            <div className="pokemon-detail">
            <section>
            <p>Ability: {pokemon.ability}</p>
            <p>Base EXP: {pokemon.baseExperience}</p>
            <p>Height: {pokemon.height}</p>
            </section>
            <picture className={pokemon.type}>
            <img src={pokemon.sprite}></img>
            </picture>
            
            <section>
            <p>HP: {pokemon.stats?.hp}</p>
            <p>Attack: {pokemon.stats?.attack}</p>
            <p>Special Attack: {pokemon.stats?.specialAttack}</p>
            <p>Special Defense: {pokemon.stats?.specialDefense}</p>
            <p>Speed: {pokemon.stats?.speed}</p>
            </section>
            </div>
            <button type="button" className="capture-btn" onClick={() =>handleCapturePokemon(pokemon)}>Capturar!</button>
            </>
            )}</main>
            </>
            );
        }
        
        export default PokemonDetail;