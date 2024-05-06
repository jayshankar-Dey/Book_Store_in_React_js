import { useState } from "react"
import Menu from "./Menu"


const AnimatedSidebar = () => {
  const[Menus,setMenus]=useState("")
  const menu=[
    {name:"Home"},
    {name:"About"},
    {name:"Services"},
    {name:"Contact"},
  ]
  return (
    <>
    <div className="w-full h-screen bg-white">

    <div className="w-96 h-screen border-r-1 border-gray-100 shadow-md flex flex-col gap-3 p-2  bg-gray-200  ">
{
  menu?.map((name,i)=>(
    
    <div key={i} className={`font-semibold  border   group bg-gray-200 duration-300 rounded-full `} onClick={()=>setMenus(i)}>
    <Menu name={name.name} className={`group-hover:shadow-2xl absolute group-hover:-right-12 duration-300 cursor-pointer rounded-full ${Menus==i&&"shadow-2xl absolute -right-12 duration-300 cursor-pointer rounded-full"}`} />
     
  </div>
  ))
}

      


    </div>


    </div>
    </>
  )
}

export default AnimatedSidebar