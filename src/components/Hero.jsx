/* eslint-disable react/no-unescaped-entities */
import { useState } from "react"
import profile from "../assets/profile1.jpeg"

const Hero = () => {
    const[menu,setMenu]=useState(false)
    
  return (
    <>
    <div className="h-screen w-full bg-pink-50">
        <header className="flex justify-between lg:p-5">
            <h1 className="font-bold text-2xl mx-3 my-1">LOGO</h1>
            <ul className={`font-bold lg:flex flex-col lg:gap-6 lg:flex-row  *:cursor-pointer lg:bg-transparent   absolute z-10 lg:static  bg-white lg:w-auto w-full  gap-3 duration-300 -top-96  ${menu?"top-20":"-top-96"} *:duration-500`}>
                <li className="hover:bg-black hover:text-white text-center p-2">HOME</li>
                <li className="hover:bg-black hover:text-white text-center p-2">ABOUT</li>
                <li className="hover:bg-black hover:text-white  text-center p-2">SERVICES</li>
                <li className="hover:bg-black hover:text-white  text-center p-2">EXPERINCE</li>
                <li className="hover:bg-black hover:text-white  text-center p-2">CONTACT</li>
            </ul>
            <h4 className="font-semibold mx-3 my-1 cursor-pointer" onClick={()=>setMenu(!menu)}>
                EN
            </h4>
        </header>
        <main className="flex flex-col lg:flex-row">
            <div className="w-full lg:w-[50%] flex flex-col  lg:py-48 lg:px-20 p-14 duration-300">
                <p className="mt-2 text-gray-500 text-xl  ">Hello</p>
              
                <h1 className="font-bold text-3xl">I'm <span className="text-red-500">JayShankar Dey</span> <span className="font-semibold text-2xl text-green-400">Full stack Devloper</span></h1>
                <p className="mt-2 text-gray-400">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit quod culpa repellat nisi nobis sint!</p>
                <button className="bg-black text-white font-semibold px-5 py-3 rounded w-48 mt-5 shadow-lg">Downlood cv</button>
            </div>
            <div className="w-full lg:w-[50%] flex justify-center items-center lg:h-[660px] duration-300">
               <img src={profile} alt=""  style={{boxShadow:"5px 5px 20px green"}} className="lg:h-96 rounded-full drop-shadow-lg shadow-inner border-4 shadow-green-900 profile duration-500" />
            </div>
        </main>
    </div>

    </>
  )
}

export default Hero