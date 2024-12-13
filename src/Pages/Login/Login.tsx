import React from "react";
import InputType from "../../Components/InputType/InputType";
import Label from "../../Components/Label/Label";
import Button from "../../Components/Button/Button";
import Title from "../../Components/Title/Title";
import Text from "../../Components/Text/Text";
import { useNavigate } from "react-router";

const Login: React.FC = () =>{
    const navigate = useNavigate()

    return(
        <div className="flex h-screen">
            <div className="bg-black flex items-center justify-center w-3/5">
                <img src="src/assets/react.svg" alt="Img Restaurante" className="w-3/5" />
            </div>

            <div className="flex items-center justify-center h-full w-2/5">
                <div className="flex flex-col w-full h-full  bg-stone-400 ">
                    <div className="flex justify-center items-center w-full h-full bg-red-500">
                        <div className="flex flex-col w-full h-full justify-center items-end m-[8%]">
                            <div className="flex flex-col justify-start items-start absolute top-36 bg-blue-500">
                                <Title
                                    title="Controle de Fila de Espera"
                                    classname="font-bold text-2xl "
                                />
                            </div>
                            <InputType
                                    placeholder="Nome"
                                    value=""
                            />
                            
                            <div className="flex flex-col justify-center items-end gap-4 bg-gray-500">
                            <InputType
                                    placeholder="Senha"
                                    value=""
                                    />

                            <Label
                                text="Esqueci a Senha"
                            />
                            <Button 
                                title="Entrar"
                                onClick={() => navigate("/inicio")}
                            />
                                <div className="flex flex-col justify-end items-end absolute bottom-32 bg-blue-500">
                                    <Text
                                        text="Uma forma diferente de administrar o seu negócio"
                                    />
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
                
            </div>
        </div>

    )
}

export default Login