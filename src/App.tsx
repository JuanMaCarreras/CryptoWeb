import Home from '@/page/Home'
import Description from '@/page/Description'
import Details from '@/page/Details'
import { ErrorBoundary } from '@/components/ErrorBoundary'
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


function App() {
  useAuthListener()
  return (
    <>
      <ToTop />
      <NavBar />
      <main className='mx-11 mini:mx-5 h-full flex-1 mt-24'>
        <ErrorBoundary>
          <Switch>
              <Route path='/' component={Home}  />
              <Route path='/description' component={Description} />
              <Route path='/coin/:coinId' component={Details} />
              <Route path='/sign-up' component={Register} />
              <Route path='/login' component={Login} />
              <Route path='/reset-password' component={PasswordReset} />
              <Route path='/:rest*' component={NotFound} />
          </Switch>
        </ErrorBoundary>
      </main>
      <Footer />
    </>
  )
}

export default App
