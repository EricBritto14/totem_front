import React from "react";
import ButtonSair from "../Button/Button";

const Menu: React.FC = () =>{
    return(
        <>
            <div className=" flex flex-col w-[20%] h-screenjustify-between border-4 border-indigo-500/100 p-4 fixed top-0 left-0 h-[100vh]">
                <div className="flex flex-col justify-center items-center p-24 mt-11">
                    <ul className="p-4">Inicio</ul>
                    <ul className="p-4">Filas</ul>
                    <ul className="p-4">Usuários</ul>
                    <ul className="p-4">Dashboard</ul>
                    <ul className="p-4">Publicidade</ul>
                    <ul className="p-4">QRCode</ul>
                </div>

                 
                <div>
                    <ButtonSair
                        title="Sair"
                        className=""
                    />
                </div>
            </div>
        
           
        </>
    )
}

export default Menu;