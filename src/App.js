import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Fragment } from "react";
import { Button } from "reactstrap";

import Header from "./components/Layout/Header";
import Project from "./components/Projects/Project";
import Skills from "./components/Skills/Skills";

function App() {
  return (
    <Fragment>
      <Header />
      <main className="main">
        <div className="greeting">
          <span>Hi Im,</span>
        </div>
        <div className="name">
          <span>Darzon</span>
        </div>
        <div className="contactMe">
          <Button color="primary">Contact Me</Button>
        </div>
        <div className="parallax"></div>
        <Project />
        <Skills />
      </main>
    </Fragment>
  );
}

export default App;
