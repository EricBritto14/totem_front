import React from "react";
import FilasInfo from "../../Components/FilasInfo/FilasInfo";

const Filas: React.FC = () =>{
    return(
        <div>
            <div className="flex flex-col gap-8 ml-[20%] p-24">
                <h1>Filas</h1>

                <div className="flex flex-row w-full">
                        <p>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
                        <div className="flex flex-row justify-end items-end w-full">
                            <button className="border-8">adicionar fila</button>
                            <button className="border-8">adicionar fila</button>
                            <button><img src="src/assets/react.svg" alt="" /></button>
                        </div>
                </div>
            </div>
            <div className="flex flex-col gap-6">
                <h1 className="ml-[25%]">Oi</h1>
                <div className="flex flex-row ml-[25%] gap-10">
                    <FilasInfo
                        valor={1}
                        className="bg-yellow-300"
                    />
                    <FilasInfo
                        valor={2}
                        className="bg-blue-500"
                    />
                    <FilasInfo
                        valor={3}
                        className="bg-gray-400"
                        />
                    <FilasInfo
                        valor={1}
                        className="bg-yellow-300"
                    />
                    <FilasInfo
                        valor={2}
                        className="bg-blue-500"
                    />
                    <FilasInfo
                        valor={3}
                        className="bg-gray-400"
                        />
                    <button className="bg-gray-400 w-[43px] h-[150px]">X</button>
                </div>
                <h1 className="ml-[25%]">Oi</h1>
                <div className="flex flex-row ml-[25%] gap-10">
                    <FilasInfo
                        valor={1}
                        className="bg-yellow-300"
                    />
                    <FilasInfo
                        valor={2}
                        className="bg-blue-500"
                    />
                    <FilasInfo
                        valor={3}
                        className="bg-gray-400"
                        />
                    <FilasInfo
                        valor={1}
                        className="bg-yellow-300"
                    />
                    <FilasInfo
                        valor={2}
                        className="bg-blue-500"
                    />
                    <FilasInfo
                        valor={3}
                        className="bg-gray-400"
                        />
                    <button className="bg-gray-400 w-[43px] h-[150px]">X</button>
                </div>
                <h1 className="ml-[25%]">Oi</h1>
                <div className="flex flex-row ml-[25%] gap-10">
                    <FilasInfo
                        valor={1}
                        className="bg-yellow-300"
                    />
                    <FilasInfo
                        valor={2}
                        className="bg-blue-500"
                    />
                    <FilasInfo
                        valor={3}
                        className="bg-gray-400"
                        />
                    <FilasInfo
                        valor={1}
                        className="bg-yellow-300"
                    />
                    <FilasInfo
                        valor={2}
                        className="bg-blue-500"
                    />
                    <FilasInfo
                        valor={3}
                        className="bg-gray-400"
                        />
                    <button className="bg-gray-400 w-[43px] h-[150px]">X</button>
                </div>
                
            </div>
        </div>
    )
}

export default Filas