import React from "react";
import { useLocation } from "react-router-dom";
import Header from "../Header/Header";
import Menu from "../Menu/Menu";

interface layoutProps{
    children: React.ReactNode
} 

const Layout: React.FC<layoutProps> = ({children}) =>{
    const location = useLocation();
    const isLoginPage = location.pathname === "/login";
    
    return(
        <div className="flex">
            {!isLoginPage && (
                <>
                    <Header/>
                    <Menu/>
                </>
            )}
            <main className={`${
          !isLoginPage ? "ml-52 mt-16" : ""
        } flex-grow p-5`}
      >
            {children}
         </main>
      </div>
    );
};

export default Layout