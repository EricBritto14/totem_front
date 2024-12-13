import React from 'react'
import ReactDOM from "react-dom/client";
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import Header from './Components/Header/Header.tsx';
import Menu from './Components/Menu/Menu.tsx';
import Layout from './Components/Layout/Layout.tsx';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Layout>
        <App />
      </Layout>
    </BrowserRouter>
  </React.StrictMode>,
)
