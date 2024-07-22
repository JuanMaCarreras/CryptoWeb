import NavBar from './components/NavBar'
import Home from './page/Home'
import Cryptocurrency from './page/Cryptocurrency'
import Description from './page/Description'
import { Route, Switch } from 'wouter'
import './App.css'

function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route path='/' component={Home}  />
        <Route path='price' component={Cryptocurrency} />
        <Route path='description' component={Description} />
      </Switch>
    </>
  )
}

export default App
