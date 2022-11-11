import {Switch, Route} from 'react-router-dom'

import LoginForm from './components/LoginForm'
import Home from './components/Home'
import Templates from './components/Templates'

import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'

import './App.css'

const App = () => (
  <Switch>
    <Route exact path="/login" component={LoginForm} />
    <ProtectedRoute exact path="/" component={Home} />
    <ProtectedRoute exact path="/Templates" component={Templates} />

    <Route component={NotFound} />
  </Switch>
)

export default App
