/* eslint-disable react/prop-types */
import { useState } from "react"



// eslint-disable-next-line no-unused-vars
const Droplist = ({list}) => {
    
    const[open,setOpen]=useState(false)
  return (
    <div className={`w-full md:w-[550px] h-fit`}>

        <div onClick={()=>setOpen(!open)} className=" bg-white overflow-hidden box-border lg:h-12 md:h-16 h-fit  p-2 rounded-md mx-4 flex flex-wrap  justify-start gap-x-3 items-center cursor-pointer  font-semibold">
         <span className={`duration-300 ${open?"rotate-90":""}`}><ion-icon name="caret-forward-outline"></ion-icon></span>
         <p> {list?.title}  </p>
        </div>

        <div className={`overflow-hidden bg-transparent box-border    p-2 rounded-md mx-4 flex flex-wrap  justify-start gap-x-3 items-center cursor-pointer text-white font-semibold duration-300`}>

            <ul  className={`flex gap-x-1 w-full flex-col duration-300 justify-start ${open?`h-fit`:"h-0 "}  `}>
              {
                list.list.map((list,i)=>(
                 <li key={i} className={`flex gap-x-3 text-[14px] my-1 ${open?"translate-x-0":"-translate-x-10"} duration-500   top-3`}>
                    <span className="text-green-400 text-[18px]"><ion-icon name="checkmark-outline"></ion-icon></span>
                    <p>{list}</p>
                </li>
                ))
              }
                
                
            </ul>

        </div>
      
    </div>
  )
}

export default Droplist
