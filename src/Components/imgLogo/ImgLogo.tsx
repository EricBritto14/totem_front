import React from "react";

interface imgProps{
    imgCaminho: string
    className: string
    titulo: string
}

const imgLogo: React.FC<imgProps> = ({imgCaminho, className, titulo}) =>{
    return(
        <div>
            <div className="flex flex-row">
                <img src={imgCaminho} alt="img Logo" className={className} />

                <div className="flex justify-center items-center">
                    <h2>{titulo}</h2>
                </div>
            </div>

            
        </div>
    )
}

export default imgLogo