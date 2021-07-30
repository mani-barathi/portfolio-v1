import { useState, useEffect } from "react";
import "./css/App.css";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";
import AdminPage from "./pages/AdminPage";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import sanity from "./sanity";

function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    sanity
      .fetch(
        `*[_type == 'project'] | order(order asc) { ..., 'imageUrl': image.asset->url }`
      )
      .then((result) => {
        setProjects(result);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Router>
      <div className="app">
        <Navbar />

        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>

          <Route path="/projects">
            <ProjectsPage projects={projects} />
          </Route>

          <Route path="/contact">
            <ContactPage />
          </Route>

          <Route path="/admin">
            <AdminPage />
          </Route>
        </Switch>
        <h4 className="app__loveText">Made with 💙</h4>
      </div>
    </Router>
  );
}

export default App;
