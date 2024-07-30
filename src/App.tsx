// import NavBar from './components/NavBar'
import Cryptocurrency from './page/Cryptocurrency'
import Description from './page/Description'
import data from './data'
import { Route, Switch } from 'wouter'
import './App.css'

function App() {
  return (
    <>
      {/* <NavBar /> */}
      <Switch>
        <div className='mx-11'>
          <Route path='/' component={Cryptocurrency}  />
          <Route path='/description' component={Description} />
          <Route path='/chart' component={data } />
        </div>
      </Switch>
    </>
  )
}

export default App
