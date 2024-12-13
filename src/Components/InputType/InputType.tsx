import React from "react";
import Label from "../Label/Label";

interface InputType{
    placeholder: string
    value: string
    classname?: string
}

const InputType: React.FC<InputType> = ({placeholder, value, classname}) =>{
    return(
        <div>
            <input
                placeholder={placeholder}
                value={value}
                className={classname} 
                />
        </div>
    )
}

export default InputType