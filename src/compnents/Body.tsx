import React from "react";
import RegForm from "./RegForm";
import { FormData } from "./RegForm";
import { useFormControlContext } from "../Contexts/FormControl";
import { useFormDataContext } from "../Contexts/FormData";
import { Alert } from "./Alert";


export const initial:FormData={
    emailAddress: "",
    password: "",
    username: "",
    firstName: "",
    currentCompany: "",
    totalExperience: "",
    designation: "",
    confirmPassword: ""
}


const Body:React.FC=()=>{

    const {data}=useFormDataContext();
    const {count}=useFormControlContext();
    const size=[1,2,3]
    const formName=["SIGNUP INFO","PERSONAL INFO","PROFESSIONAL INFO"]
    const labels=[["Email Address","Password","Confirm Password"],["User Name","First Name","Last Name"],["Current Company","Total Experience","Designation"]]
    const fields=[["emailAddress","emailAddress","confirmPassword"],["userName","firstName","lastName"],["currentCompany","totalExperience","designation"]]

    return (
        <>
            {size.map((_,i)=>{
                if(count===i)
                return <RegForm size={size.length} name={formName[i]} data={data} lables={labels[i]} fields={fields[i]} ></RegForm>
            })}
            <Alert></Alert>
        </>
    )
}

export default Body;