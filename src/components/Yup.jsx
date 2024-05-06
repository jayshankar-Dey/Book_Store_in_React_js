/* eslint-disable no-unused-vars */
import * as Yup from "yup"

export const signUpSchema=Yup.object({
    name:Yup.string().min(2).max(20).required("Please enter your name"),
    email:Yup.string().min(5).email().required("please enter email"),
    password:Yup.string().min(6).required("password is required"),
    confermPassword:Yup.string().required("conferm password is required").oneOf([Yup.ref("password"),null],"password most be metch")
})