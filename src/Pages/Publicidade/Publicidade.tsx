import React from "react";
import PublicidadeCard from "../../Components/PublicidadeCards/PublicidadeCard";

const Publicidade: React.FC = () =>{
    return (
        <section>
            <div className="flex flex-row ml-[25%] pt-[13%] gap-40">
                <PublicidadeCard 
                    img="src/assets/react.svg"
                    text="50% off toda segunda..."
                    />

                <PublicidadeCard 
                    img="src/assets/react.svg"
                    text="50% off toda segunda..."
                    />


                <PublicidadeCard 
                    img="src/assets/react.svg"
                    text="50% off toda segunda..."
                    />
            </div>
        </section>
    )
}

export default Publicidade
