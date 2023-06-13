import './App.css'
import { Route, Switch } from 'react-router-dom'
import PokemonList from './pages/PokemonList'
import PokemonDetail from './pages/PokemonDetail'
import CapturedPokemonList from './pages/CapturedPokemonList'

function App() {
  return (
    <Switch>
      <Route path='/pokedex' component={CapturedPokemonList} />
      <Route path='/:id' component={PokemonDetail} />
      <Route exact path='/' component={PokemonList} />
    </Switch>
  )
}
export default App;