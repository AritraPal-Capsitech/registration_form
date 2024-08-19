import { createContext, useContext } from "react";
import { FormData } from "../compnents/RegForm";

export interface FormStructure{
    data:FormData,
    setData:(params:FormData)=>void
}
const initial:FormData={
    emailAddress: "",
    password: "",
    username: "",
    firstName: "",
    currentCompany: "",
    totalExperience: "",
    designation: "",
    confirmPassword: ""
}

export const FormDataControl=createContext<FormStructure>({
    data:initial,
    setData:()=>{}
})

export const useFormDataContext=()=>useContext(FormDataControl);