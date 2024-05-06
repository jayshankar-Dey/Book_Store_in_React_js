/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */

 import { useState } from "react"
import Input from "../components/Input"
import {useFormik} from "formik"
import { signUpSchema } from "./Yup"


const FormValidation = () => {
const initialValues={
  name:"",
  email:"",
  password:"",
  confermPassword:""
}
   
  const {values,errors,handleSubmit,handleChange,handleBlur,touched}=useFormik({
    initialValues:initialValues,
    validationSchema:signUpSchema,
    onSubmit:(value)=>{
      
    }
  })
   
 
  return (
    <div className="w-full h-screen bg-gray-100 flex justify-center items-center">

      <div className=" h-fit p-1 bg-white rounded-md flex   justify-center shadow-md border-2 border-gray-100 md:flex-row md:w-[870px] mx-5 md:m-0 w-full gap-3 ">
         

         <div className="md:w-[50%] w-full px-2  flex flex-col justify-center items-center ">
          
          <form onSubmit={handleSubmit} className="flex flex-col w-full ">
             <h1 className="text-xl mt-3 font-semibold">Wellcome to Register Page</h1>
             <p className="my-2 text-[13px] text-gray-400">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae, ipsum!</p>
            <Input lable="Name" type="text" value={values.name}  error={errors.name && touched.name?errors.name:""} name={"name"} onChange={handleChange} onBlur={handleBlur} />


            <Input lable="Email" type="email"  error={errors.email&&touched.email?errors.email:""} name={"email"}  onChange={handleChange} onBlur={handleBlur}  value={values.email}/>

            <Input lable="Password" type="password"  error={errors.password && touched.password?errors.password:""} name={"password"} onChange={handleChange} onBlur={handleBlur} value={values.password}  />
           
            <Input lable="Conferm password" type="password"  error={errors.confermPassword && touched.confermPassword?errors.confermPassword:""} name={"confermPassword"} value={values.confermPassword} onChange={handleChange} onBlur={handleBlur} />

            <button className="mt-4 p-2 bg-blue-500 text-white font-semibold w-32 rounded-md shadow-md mb-3">Register</button>

          </form>

         </div>

         <div className="md:w-[50%] md:block hidden ">
          <img src="https://cdni.iconscout.com/illustration/premium/thumb/biometric-authentication-2600572-2179757.png" alt="" />
         </div>
        
      </div>

    </div>
  )
}

export default FormValidation