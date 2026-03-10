import { lazy } from 'react'
import { Register } from '@/page/Register'
import { Login } from '@/page/Login'
import { NotFound } from '@/page/NotFound'
import { ToTop } from '@/components/ToTop'
import { NavBar } from '@/components/NavBar'
import { Footer } from '@/components/Footer'
import { Route, Switch } from 'wouter'
import './App.css'
import { useAuthListener } from '@/hook/useAuthListener'
import { PasswordReset } from '@/page/PasswordReset'


const Home = lazy(() => import('@/page/Home'))
const Description = lazy(() => import('@/page/Description'))
const Details = lazy(() => import('@/page/Details'))

function App() {
  useAuthListener()
  return (
    <>
      <ToTop />
      <NavBar />
      <main className='mx-11 mini:mx-5 h-full flex-1 mt-24'>
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
