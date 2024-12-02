import React from "react";

interface publicidadeProps{
    img: string
    text: string

}

const PublicidadeCard: React.FC<publicidadeProps> = ({img, text}) =>{
    return(
        <div className="w-[250px] h-[200px] rounded-3xl flex flex-col bg-gray-400">
            <div className="w-[240px] h-[130px] justify-center items-center bg-black mt-[4%] ml-[2%]">
                <img src={img} alt="Imagem promoção" />
            </div>

            <div>
                <p>{text}</p>
            </div>

        </div>
    )
}

export default PublicidadeCard