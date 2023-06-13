import { useContext } from "react"
import PokemonContext from "../context/PokedexContext"
import { Pokemon } from "../types/Pokemon";
import Header from "../components/Header";
import { Link } from "react-router-dom";

const PokemonList = () =>{
    
    const context = useContext(PokemonContext);
    
    return(
        <>
        <Header />
        <main className="pokedex-container">
        {context.pokemonList.map((pokemon: Pokemon) => {
            const id = pokemon.url.split('/')[6];
            return(
                <Link className="pokemon-item" key={id} to={`/${id}`}>
                <p>{pokemon.name}</p>
                <p>{id}</p>
                </Link>
                ) 
            })
        }
        </main>
        </>
        )
    }
    
    export default PokemonList;