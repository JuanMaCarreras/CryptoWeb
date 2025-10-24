import { ToTop } from '@/components/ToTop'
import { NavBar } from '@/components/NavBar'
import { Home } from '@/page/Home'
import { Description } from '@/page/Description'
import { Details } from '@/page/Details'
import { Footer } from '@/components/Footer'
import { NotFound } from '@/page/NotFound'
import { Route, Switch } from 'wouter'
import './App.css'

import { Register } from '@/page/Register'
import { Login } from '@/page/Login'
import { useAuthListener } from '@/hook/useAuthListener'
import { PasswordReset } from '@/page/PasswordReset'


function App() {
  useAuthListener()
  return (
    <>
      <ToTop />
      <NavBar />
      <main className='mx-11 mini:mx-5 h-full flex-1 mt-32'>
        <Switch>
            <Route path='/' component={Home}  />
            <Route path='/description' component={Description} />
            <Route path='/coin/:coinId' component={Details} />
            <Route path='/sign-up' component={Register} />
            <Route path='/login' component={Login} />
            <Route path='/reset-password' component={PasswordReset} />z
            
            <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </>
  )
}

export default App
