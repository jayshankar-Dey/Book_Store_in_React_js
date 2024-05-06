

const Bannar = () => {
  return (
    <>
         <div className="md:w-[90%] w-full h-fit flex flex-col bg-slate-200 md:grid md:grid-cols-3 md:grid-rows-2 gap-1 border shadow-md p-1 rounded-md
   ">
  <div className="lg:row-span-2   border-blue-600 lg:col-span-2 col-span-1 row-span-2 ">
    <img src="https://graphicsfamily.com/wp-content/uploads/edd/2023/06/E-commerce-Website-Product-Banner-Design-scaled.jpg" alt="" className="h-full w-full " />
  </div>
  <div className=" border-gray-600 row-span-2 lg:row-span-1">
    <img src="https://graphicsfamily.com/wp-content/uploads/edd/2022/11/Simple-E-commerce-Banner-Design-scaled.jpg" alt="" className="h-full w-full" />
  </div>
  <div className=" border-gray-600  row-span-2 lg:row-span-1">
    <img src="https://i.pinimg.com/1200x/76/1c/74/761c749dafe37daa7cd575491fbddb04.jpg" alt="" className="h-full w-full" />
  </div>
  </div>
    </>
  )
}

export default Bannar