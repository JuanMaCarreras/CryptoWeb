import NavBar from './components/NavBar'
import Cryptocurrency from './page/Cryptocurrency'
import Description from './page/Description'
import Details from '@/page/Details'
import { Route, Switch } from 'wouter'
import './App.css'

function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <div className='mx-11 font-popins'>
          <Route path='/' component={Cryptocurrency}  />
          <Route path='/description' component={Description} />
          <Route path='/coin/:coinId' component={Details} />
        </div>
      </Switch>
    </>
  )
}

export default App
