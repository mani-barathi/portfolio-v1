import './css/App.css'
import Navbar from "./components/Navbar"
import HomePage from "./components/HomePage"
import ProjectsPage from "./components/ProjectsPage"
import ContactPage from "./components/ContactPage"

import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

function App() {

  return (
    <Router>
      <div className="app">
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>

          <Route path="/projects" >
            <ProjectsPage />
          </Route>

          <Route path="/contact" >
            <ContactPage />
          </Route>

        </Switch>
      </div>
    </Router>
  )
}

export default App
