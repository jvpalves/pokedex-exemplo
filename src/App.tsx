import './App.css'
import { Route, Switch } from 'react-router-dom'
import PokemonList from './pages/PokemonList'
import PokemonDetail from './pages/PokemonDetail'

function App() {
  return (
    <Switch>
      <Route path='/:id' component={PokemonDetail} />
      <Route exact path='/' component={PokemonList} />
    </Switch>
  )
}
export default App;