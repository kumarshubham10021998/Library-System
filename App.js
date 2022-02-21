
import React from 'react'
import Book from './Book'
import Enter from './Enter'
import About from './About'
import Home from './Home'



import {
  BrowserRouter as Router,
  Switch,
  Route

} from "react-router-dom"

import NavBar from './NavBar';

function App() {
  


    return (
      <div>

        <Router>
          <NavBar />

          <Switch>
          <Route  exact path="/home"><Home /></Route>
            <Route  exact path="/about"><About /></Route>
            <Route  exact path="/enter Book"><Enter   /></Route>
            <Route exact path="/listBook"><Book  /></Route>

          </Switch>
        </Router>

      </div>
    )
  
  }



export default App
