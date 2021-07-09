import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
// import './index.css';
import './style.css';
import Header from "./Header"
import routes from "./routes"
import firebase from "firebase/index";
import firebaseConfig from "./firebase.config";

firebase.initializeApp(firebaseConfig);

// import App from './App';
import reportWebVitals from './reportWebVitals';

export const AuthContext = React.createContext(null);

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);

  return (
    <AuthContext.Provider value={{ isLoggedIn, setLoggedIn }}>

      <div className="App">
        <Router>
          <Header />

          <p id="notif">
            Is logged in? {JSON.stringify(isLoggedIn)}
          </p>

          <Switch>
            {routes.map(route => (
              <Route key={route.path} path={route.path} exact={route.exact} component={route.main} />
            ))}
          </Switch>
        </Router>
      </div>
    </AuthContext.Provider>
  )
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);