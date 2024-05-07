import { InputSpace } from "./InputStyled";

export function Input({type, placeholder, name, register}) {
    return (
        <InputSpace type={type} placeholder={placeholder} {...register(name)}/>
    );
}

export function EditInput({type, placeholder, name, register, defaultValue}) {
    return (
        <InputSpace type={type} placeholder={placeholder} defaultValue={defaultValue} {...register(name)}/>
    );
}