import { NavBar } from '@/components/NavBar'
import { Cryptocurrency } from '@/page/Cryptocurrency'
import { Description } from '@/page/Description'
import { Details } from '@/page/Details'
import { Footer } from '@/components/Footer'
import { NotFound } from '@/page/NotFound'
import { Route, Switch } from 'wouter'
import './App.css'

function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <main className='mx-11 mini:mx-5 h-full flex-1'>
          <Route path='/' component={Cryptocurrency}  />
          <Route path='/description' component={Description} />
          <Route path='/coin/:coinId' component={Details} />
          <Route component={NotFound} />
        </main>
      </Switch>
      <Footer />
    </>
  )
}

export default App
