import { ReactElement, useContext } from "react";
import PokemonContext from "../context/PokemonContext";
import Header from "../components/Header";

function CapturedPokemonList(): ReactElement {
    
    const {pokedex} = useContext(PokemonContext);
    
    return ( 
        <>
        <Header />
        <h1>Captured Pokemon</h1> 
        <main className="pokedex-container">
        
        {pokedex && pokedex.map((pokemon)=>{
            console.log(pokemon);
            return (
                <section className="pokedex-item" key={pokemon.id}>
                <picture className={pokemon.type}>
                <img className="pokedex-image" src={pokemon.sprite} />
                </picture>
                <p>{pokemon.name}</p>
                
                </section>
                )
            })}
            </main>
            </>
            )
        }
        
        export default CapturedPokemonList;