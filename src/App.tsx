import { ToTop } from '@/components/ToTop'
import { NavBar } from '@/components/NavBar'
import { Home } from '@/page/Home'
import { Description } from '@/page/Description'
import { Details } from '@/page/Details'
import { Footer } from '@/components/Footer'
// import { NotFound } from '@/page/NotFound'
import { Route, Switch } from 'wouter'
import './App.css'

import { Register } from '@/components/auth/Register'
import { Login } from '@/components/auth/Login'
import { useAuthListener } from '@/hook/useAuthListener'


function App() {
  useAuthListener()
  return (
    <>
      <ToTop />
      <NavBar />
      <Switch>
        <main className='mx-11 mini:mx-5 h-full flex-1 mt-32'>
          <Route path='/' component={Home}  />
          <Route path='/description' component={Description} />
          <Route path='/coin/:coinId' component={Details} />
          {/* <Route component={NotFound} /> */}
          <Route path='/sign-up' component={Register} />
          <Route path='/login' component={Login} />
        </main>
      </Switch>
      <Footer />
    </>
  )
}

export default App
