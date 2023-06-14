import { ReactElement } from "react";
import { Link } from "react-router-dom";

const Header = (): ReactElement => {
    return (
        <header>
        <Link to='/'>
        <h1>Pokémon Home</h1>
        </Link>
        <Link to='/pokedex'>
            <h3>My Pokédex</h3>
        </Link>
        </header>
        )
    }

export default Header;