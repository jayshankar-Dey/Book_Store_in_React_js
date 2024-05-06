import { useState } from "react"


const SideBar = () => {
    const[show,setShow]=useState(false)
    const[set,showSet]=useState(0)
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
    <div className="flex relative">
    <div className={` duration-300 bg-blue-400    h-screen   left-0  ${show?" absolute w-[90%] md:w-96":"w-14"} `}>

<div className="relative  ">
    <span className={`absolute -right-3 top-3 bg-black border-2 px-1 rounded-full text-white cursor-pointer duration-500 ${show?"rotate-180":""}`} onClick={()=>setShow(!show)}><ion-icon name="chevron-forward-outline"></ion-icon></span>
</div>
  <ul className="px-2 py-3 mt-4">
    {
      menu.map((menu,i)=>(
        <li key={i} className={`flex gap-x-6 text-center font-bold text-white mt-5 hover:bg-blue-200 duration-300 group p-3 rounded-md cursor-pointer items-center ${set==i&&"bg-blue-200"} `} onClick={()=>showSet(i)}>
         <span className="text-[20px]"> <ion-icon name={menu.icon}></ion-icon></span>
         <a href="#" className={` ${show?"scale-100":"scale-0"} ${show?`duration-500`:"duration-200"}`}>{menu.name}</a>
         <span className={`absolute duration-300 left-72 scale-0 ${show?"hidden":" block group-hover:scale-100 group-hover:left-20 bg-white text-black px-4 font-semibold rounded-full"} `}>{menu.name}</span>
        </li>
      ))
    }
  </ul>
</div>

<div className="w-full h-screen bg-slate-400 overflow-scroll ">
  <h1>hello world</h1>
</div>

 </div>
    </>
  )
}

export default SideBar