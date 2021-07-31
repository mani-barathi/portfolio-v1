import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./css/App.css";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import WorksPage from "./pages/WorksPage";
import ContactPage from "./pages/ContactPage";
import AdminPage from "./pages/AdminPage";

import { getBlogs, getProjects } from "./utils";

function App() {
  const [projects, setProjects] = useState([]);
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    getProjects().then((p) => setProjects(p));
    getBlogs().then((b) => setBlogs(b));
  }, []);

  return (
    <Router>
      <div className="app">
        <Navbar />

        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>

          <Route path="/works">
            <WorksPage projects={projects} blogs={blogs} />
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
