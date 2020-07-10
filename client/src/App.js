import React from 'react';
import Home from "./views/Home";
import Navbar from "./components/Navbar";
import "./App.css"
import Sidebar from './components/Sidebar';
import Links from './views/Links';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//Context.api
import {GlobalProvider} from './context/GlobalState'

function App() {

  return (
    <GlobalProvider>
      {/* <Navbar /> */}
      <Router>
        <div className="wrapper">
        <Sidebar />
          <div className="container main">
            <Switch>
              <Route path='/genre/:id' exact render= {routeProps =><Links {...routeProps} key={document.location.href} />} />
              <Route path="/" component={Home} />
            </Switch>
          </div>
        </div>
      </Router>
    </GlobalProvider>
  );
}

export default App;
