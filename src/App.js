// import logo from './logo.svg';
import './App.css';
// import Hello from './component/hello.jsx'
import Home from './component/home/home.jsx'
import Login from './component/Login/loginn/login.jsx'
import React, { useState } from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";






function App() {
  const [headerName, setHeaderName] = useState('')
  const [ActionNameLogEnvoie, setActionNameLogEnvoie] = useState('')
  const [nameLogin, setNameLogin] = useState('')


  const logName = (t) => {
    setNameLogin(t)
  }
  const ButtonNameLogEnvoie = (t) => {
    setActionNameLogEnvoie(t)
    if (nameLogin.length >= 2) {
      const zoubida = nameLogin
      // const tableau = [...headerName]
      // tableau.push(nameLogin)
      setHeaderName(zoubida)
    } else {
      console.log("encore header")
    }
  }
  // console.log(headerName[0])

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Login
              logName1={logName}
              value={nameLogin}
              action={ActionNameLogEnvoie}
              ButtonNameLogEnvoie1={ButtonNameLogEnvoie}
            ></Login>
          </Route>
          <Route exact path="/home">
            <Home
            Nameheader={headerName}
            ></Home>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
