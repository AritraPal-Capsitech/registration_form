import  { createContext,useContext } from "react";

export interface Flow{
    count:number,
    setCount:(params:number)=>void
}

export const FormControl=createContext<Flow>({
    count:0,
    setCount:()=>{}
})

export const useFormControlContext=()=>useContext(FormControl)
