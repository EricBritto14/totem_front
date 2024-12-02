import React from "react";
import { useState } from "react";
import OpcoesHomes from "../../Components/OpcoesHome/OpcoesHome";

const Home: React.FC = () => {
    return(
        <section className="ml-[27%] flex flex-col w-fit h-screen p-36 gap-12">
                <div className="flex flex-row gap-32 mt-3">
                            <OpcoesHomes
                            title="oi"
                            text="oi"
                            imgPath="src/assets/react.svg"
                            />

                            <OpcoesHomes
                            title="oi"
                            text="oi"
                            imgPath="src/assets/react.svg"
                            />
                </div>
                        <div className="flex flex-rol gap-32 mt-7">
                            <OpcoesHomes
                            title="oi"
                            text="oi"
                            imgPath="src/assets/react.svg"
                            />

                            <OpcoesHomes
                            title="oi"
                            text="oi"
                            imgPath="src/assets/react.svg"
                            />
                        </div>
        </section>

        
    )
}

export default Home