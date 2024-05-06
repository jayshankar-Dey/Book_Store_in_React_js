import { useState } from "react"


const ButtomMenu = () => {
    const[Menu,setMenu]=useState("")
    
    // eslint-disable-next-line no-unused-vars
    const menu=[
        {
          name:"Home",
          icon:"home-outline"
        },
        {
            name:"About",
            icon:"book-outline"
        },
        {
            name:"Services",
            icon:"body-outline"
        },
        {
            name:"Contact",
            icon:"call-outline"
        }
    ]
  return (
    <>
    <div className="h-screen w-full bg-gray-500  flex justify-center items-center ">

  
    <div className=" p-1 border border-gray-400 rounded-lg  bg-gray-700 text-white font-semibold shadow-xl   bottom-5  ">
        <ul className="flex justify-between text-center px-3 py-1" >
            {

                menu.map((menu,i)=>(
                    <li key={i} className="w-20  flex flex-col gap-2 cursor-pointer relative" onClick={()=>setMenu(i)}>
                        <samp className={` ${Menu === i?"absolute -top-8 left-6 border-2 bg-green-600 px-2 py-1 rounded-full":""} `}>
                        <ion-icon name={menu.icon}></ion-icon>
                        </samp>
                        <a href="#" className={`text-[14px] mt-2  absolute opacity-0 -bottom-10 ${Menu === i ?"opacity-100 bottom-auto right-0 left-0  ":""}`}>{menu.name}</a>
                    </li>
                ))
            }
        </ul>
    </div>

    </div>
    </>
  )
}

export default ButtomMenu