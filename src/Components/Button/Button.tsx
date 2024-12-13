import React from "react";

interface Button{
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    title: string
    className?: string
}

const Button: React.FC<Button> = ({onClick, title, className}) =>{
    return(
        <div className={`${className}`}>
            <button onClick={onClick}>
                {title}
            </button>
        </div>
    )
}

export default Button