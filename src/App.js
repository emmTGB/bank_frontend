import './App.css';
import React from 'react';
import {BrowserRouter as Router, Navigate, Route, Routes} from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import DashboardPage from "./pages/Dashboard/DashboardPage";
import CreateAccountPage from "./pages/CreateAccountPage";

import "mdui/mdui.css"
import RegisterForm from "./components/RegisterForm";
function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
      <Router>
        <div>
          <Routes>
            <Route path="/auth" component={<Navigate to="login" />} >
              <Route path="login" element={<LoginPage />} />
              <Route path="register" element={<RegisterPage />} />
            </Route>
            <Route path="/account/create" element={<CreateAccountPage />}/>
            <Route path="/dashboard/:id">
              <Route index element={<Navigate to="cards" />} />
              <Route path="cards" element={<DashboardPage />} />
            </Route>
          </Routes>
        </div>
      </Router>
  );
}

export default App;
