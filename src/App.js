import './App.css';
import React from 'react';
import {BrowserRouter as Router, Navigate, Route, Routes} from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import DashboardPage from "./pages/Dashboard/DashBoardPage";
import CreateAccountPage from "./pages/CreateAccountPage";

import "mdui/mdui.css"
import Home from "./components/Home";
import {setColorScheme, setTheme} from "mdui";
import NotFoundPage from "./pages/NotFoundPage";
import {createTheme, ThemeProvider} from "@mui/material";
import {MDUITheme} from "./styles/MDUITheme";
import {TransactionPage} from "./pages/Business/TransactionPage";

function App() {
  setTheme("auto")
  setColorScheme('#668800')
  const thisTheme = createTheme(MDUITheme())

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
    <ThemeProvider theme={thisTheme}>
      <Router>
        <div className='App'>
          <Routes>
            <Route path={"/"} element={<Home />} />
            <Route path="/auth" component={<Navigate to="login" />} >
              <Route path="login" element={<LoginPage />} />
              <Route path="register" element={<RegisterPage />} />
            </Route>
            <Route path="/account/create" element={<CreateAccountPage />} />
            <Route path={"transaction"} element={<TransactionPage />} />
            <Route path="/dashboard/:id/*" element={<DashboardPage/>}>
            </Route>
            <Route path={"/NotFound"} element={<NotFoundPage />} />
            <Route path={"*"} component={<Navigate to={"NotFound"}/>}/>
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
