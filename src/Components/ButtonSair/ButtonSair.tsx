import React from "react";

interface ButtonSair{
    onClick?: () => void
    title?: string
    className?: string
}

const ButtonSair: React.FC<ButtonSair> = ({onClick, title, className}) =>{
    return(
        <div className={`${className}`}>
            <button onClick={onClick}>
                {title}
            </button>
        </div>
    )
}

export default ButtonSair