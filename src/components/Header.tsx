import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header>
        <Link to='/'>
        <h1>Pokedex</h1>
        </Link>
        </header>
        )
    }

export default Header;