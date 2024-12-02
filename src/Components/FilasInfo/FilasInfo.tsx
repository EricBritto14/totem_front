import React from "react";

interface FilasInfo{
    valor: number
    className: string
    onClick?: () => void
}

const FilasInfo: React.FC<FilasInfo> = ({valor, className, onClick}) =>{
    return(
        <div>
            <div className="flex flex-row w-[200px] h-[150px]">

                <div className={`${className} flex flex-col w-[200px] rounded-3xl` }>
                    <div className="flex justify-start items-start text-red-600 ml-3" onClick={onClick}>
                        X
                    </div>

                    <h1 className="flex justify-center items-center p-6">Mesas para:</h1>
                    <p className="flex justify-center items-center">{valor}</p>
                </div>
            </div>
        </div>

    )
}

export default FilasInfo