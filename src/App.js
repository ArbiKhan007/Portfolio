import { BrowserRouter, Link, Switch, Route } from "react-router-dom";

import "./App.css";
import bgVideo from "./assets/Black.mp4";
import Sidebar from "./modules/Sidebar";
import Skills from "./modules/Skills";
import About from "./modules/About";
import Projects from "./modules/Projects";
import Experience from "./modules/Experience";
import Education from "./modules/Education";
import Links from "./modules/Links";
import Contact from "./modules/Contact";

function App() {
  return (
    <BrowserRouter>
      <div className="bg">
        <video autoPlay muted loop id="myVideo">
          <source src={bgVideo} type="video/mp4" />
        </video>
      </div>

      <div className="container-fluid">
        <div className="row">
          <div>
            <div className="home-square">
              <Link className="home-btn btn btn-outline-dark" to="/">
                AAQUIB MIRZA
              </Link>
            </div>
            <Sidebar className="sidebar" />
          </div>

          <div className="col" style={{ padding: "0 2rem" }}>
            <Switch>
              <Route path="/skills">
                <Skills />
              </Route>
              <Route path="/" exact>
                <About />
              </Route>
              <Route path="/about" exact>
                <About />
              </Route>
              <Route path="/projects">
                <Projects />
              </Route>
              <Route path="/experience">
                <Experience />
              </Route>
              <Route path="/education">
                <Education />
              </Route>
              <Route path="/links">
                <Links />
              </Route>
              <Route path="/contact">
                <Contact />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
