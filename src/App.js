import './App.css';
import React from 'react';
import {BrowserRouter as Router, Navigate, Route, Routes} from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import DashboardPage from "./pages/DashboardPage";
import CreateAccountPage from "./pages/CreateAccountPage";
import "mdui/mdui.css"

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
          <h1>My App</h1>
          <Routes>
            <Route path="/auth" component={<Navigate to="/auth/login" replace />} >
              <Route path="login" element={<LoginPage />} />
              <Route path="register" element={<RegisterPage />} />
            </Route>
            <Route path="/account/create" element={<CreateAccountPage />}/>
            <Route path="/dashboard/:id" element={<DashboardPage /> }/>
          </Routes>
        </div>
      </Router>
  );
}

export default App;
