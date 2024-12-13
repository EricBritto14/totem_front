import React from "react";

interface textProps{
    text: string
    className?: string
}

const Text: React.FC<textProps> = ({text, className}) =>{
    return(
        <div>
            <h2 className={className}>{text}</h2>
        </div>
    )
}

export default Text