import React from "react";

interface OpcoesHomes{
    title: string
    text: string
    imgPath?: string
    onClick?: () => void
    className?: string
}

const OpcoesHomes: React.FC<OpcoesHomes> = ({title, text, imgPath, onClick, className}) => {
    return(
        <div className="w-[450px]">
            <div className="flex flex-row w-[450px] h-[120px] bg-slate-500">
                <img src={imgPath} alt="imagemCard" className={`${className} w-[120px]`}/>
                <h1>{title}</h1>
            </div>

            <div className="flex w-[450px] h-[200px] bg-slate-400">
                <p>{text}</p>
            </div>
        </div>
    )
}

export default OpcoesHomes