import { useContext } from "react";
import PokemonContext from "../context/PokemonContext";

function CapturedPokemonList() {

    const PkmnContext = useContext(PokemonContext);

    return ( <h1>Captured Pokemon</h1> );
}

export default CapturedPokemonList;