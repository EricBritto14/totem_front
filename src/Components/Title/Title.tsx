import React from "react";

interface titleprops{
    title: string
    classname?: string
}

const Title: React.FC<titleprops> = ({title, classname}) =>{
    return(
        <h1 className={classname}>{title}</h1>
    )
}

export default Title