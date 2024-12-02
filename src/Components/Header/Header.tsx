import React from "react";
import { useNavigate } from "react-router";
import { useState } from "react";


interface NavContext{
    path: string
    name: string
}

const NavLinsk: NavContext[] = [
    { path: "/teste1", name: "Teste1"},
    { path: "/teste2", name: "Teste2"},
    { path: "/teste3", name: "Teste3"},
    { path: "/teste4", name: "Teste4"},
];

const Header: React.FC = () =>{
    const [activePath, setActivePath] = useState<string | null>(null);
    const navigate = useNavigate();

    const handleClick = (path: string, event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) =>{
        event.preventDefault();
        setActivePath(path);
        navigate(path);
    };

    return(
            <nav className="flex items-center justify-between shadow-md fixed h-[73px] z-20 top-0 left-0 right-0 px-8 b">
                <div className="flex items-center gap-4 ">
                    <img src="/src/assets/react.svg" className="w-[70px]"/>
                    <h2>Controle de fila</h2>
                </div>
                    <div className="flex-1 flex justify-center">
                        <ul className="flex gap-16 list-none">
                            {NavLinsk.map((link) =>(
                                <li key={link.path}>
                                    <a href={link.path}
                                    onClick={(event) => handleClick(link.path, event)}
                                    className={`relative text-black hover:text-gray-700 after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:w-0 after:h-[2px] after:bg-black after:transition-all after:duration-300 ${activePath === link.path ? 'after:w-full' : ''}`}
                                    />
                                    {link.name}
                                </li>    
                            ))}
                        </ul>
                    </div>
            </nav>
    )
}

export default Header