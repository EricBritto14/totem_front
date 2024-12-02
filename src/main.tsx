import React from 'react'
import ReactDOM from "react-dom/client";
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import Header from './Components/Header/Header.tsx';
import Menu from './Components/Menu/Menu.tsx';

const showHeader = location.pathname !== "/login"
const showMenu = location.pathname !== "/login"

ReactDOM.createRoot(document.getElementById('root')!).render(
 
  <React.StrictMode>
    <BrowserRouter>
        {showHeader && <Header/>}
        {showMenu && <Menu/>}
        <App />
    </BrowserRouter>
  </React.StrictMode>,
)
