import './App.css';
import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router, Navigate, Route, Routes} from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import DashboardPage from "./pages/Dashboard/DashBoardPage";
import CreateAccountPage from "./pages/CreateAccountPage";

import "mdui/mdui.css"
import Home from "./components/Home";
import NotFoundPage from "./pages/NotFoundPage";
import {createTheme, ThemeProvider} from "@mui/material";
import {MDUITheme} from "./styles/MDUITheme";
import {TransactionPage} from "./pages/Business/TransactionPage";
import {zhCN} from '@mui/material/locale';
import {PalettePage} from "./pages/PalettePage";
import {applyTheme, getMuiMode, getThemeMode} from "./styles/PaletteTheme";
import UpdatePage from "./pages/UpdatePage";


function App() {
  applyTheme()
  const [thisTheme, setThisTheme] = useState( createTheme(MDUITheme(getMuiMode()), zhCN))

  return (
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
            <Route path="/dashboard/:id" element={<DashboardPage />}>
              <Route path={":page/*"} element={<DashboardPage />} />
            </Route>
            <Route path={"/palette"} element={<PalettePage/>} />
            <Route path={"/update"} element={<UpdatePage/>} />
            <Route path={"/NotFound"} element={<NotFoundPage />} />
            <Route path={"*"} element={<Navigate to={"NotFound"} />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
