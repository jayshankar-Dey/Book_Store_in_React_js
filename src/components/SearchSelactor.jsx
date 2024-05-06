import { useState } from "react"


const SearchSelactor = () => {
    const[select,setSelect]=useState("Select")
    const[search,setSearch]=useState("")
    const[open,setOpen]=useState(false)
    const country=[
        {
            name:"india"
        },
        {
            name:"Amarica"
        },
        {
            name:"pakistan"
        },
        {
            name:"Usa"
        },
        {
            name:"Rusian"
        },
        {
            name:"Chin"
        },
        {
            name:"Hidrabad"
        },
        {
            name:"Nepal"
        },
        {
            name:"Odisha"
        },
        {
            name:"Os"
        },
        {
            name:"Indra"
        }

    ]
  return (
    <div className="h-screen w-full bg-gray-200 flex justify-center items-center">
        <div className="w-96 p-1 rounded-md">

          <div className="w-full h-8 rounded-md px-2 border shadow flex justify-between items-center bg-white cursor-pointer" onClick={()=>setOpen(!open)}>
            <h5>{select}</h5>
            <span className={`${open?"":"-rotate-90"} duration-300`}><ion-icon name="chevron-down-outline"></ion-icon></span>
          </div>
           
         <div className={`w-full mt-2 p-1 bg-white rounded-md max-h-96 overflow-y-scroll scrollbar scrollbar-thumb-red-500  scrollbar-track-red-500   flex flex-col relative duration-300 ${open?"scale-100":"scale-0 "} scrol `}>

         <div className="">
         <input type="text" value={search} placeholder="Search"   className="bg-gray-50 rounded-sm w-full py-3 px-3    outline-none font-semibold text-sm mb-1" onChange={(e)=>setSearch(e.target.value)}/>
         </div>

          <ul className="flex flex-col">
            {
                country.map((country,i)=>(
                    <li key={i} className={` p-3 hover:bg-gray-200 cursor-pointer rounded-md flex gap-x-4 ${country.name.toLowerCase().startsWith(search)?"block":"hidden"} `} onClick={()=>setSelect(country.name)}><span className="px-1 bg-gray-200 rounded-full shadow-md">{i}</span>{country.name}</li>
                ))
            }
          </ul>
         </div>

        </div>
    </div>
  )
}

export default SearchSelactor