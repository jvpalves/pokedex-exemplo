import { useContext } from "react";
import PokemonContext from "../context/PokemonContext";

function CapturedPokemonList() {

    const {pokedex} = useContext(PokemonContext);

    return ( 
    <>
    <h1>Captured Pokemon</h1> 

    {pokedex && pokedex.map((pokemon)=>{
        console.log(pokemon);
        return (
            <section className="pokedex-item" key={pokemon.id}>
                <p>{pokemon.name}</p>

            </section>
        )
    })}
    </>
    )
}

export default CapturedPokemonList;