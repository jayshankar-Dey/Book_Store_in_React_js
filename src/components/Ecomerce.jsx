

const Ecomerce = () => {
  return (
    <div className="mt-2">
       

       <div className="w-80 h-80 border overflow-hidden duration-300 relative rounded-md cursor-pointer group ">
          <div className=" h-full w-full">
            <img src="https://img.freepik.com/free-photo/abstract-autumn-beauty-multi-colored-leaf-vein-pattern-generated-by-ai_188544-9871.jpg?size=626&ext=jpg&ga=GA1.1.1224184972.1714608000&semt=ais" alt=""  className="object-cover object-center h-full group-hover:scale-110 duration-300"/>
          </div>
          
          <div style={{background:"rgba(128, 128, 128, 0.347)"}} className=" absolute w-full h-32 z-10 bottom-0 left-0 backdrop-blur-sm p-3 text-white group-hover:h-[120%] duration-500">
            <h1  className=" font-semibold text-2xl p-2"> amet consectetur adipisicing elit. Blanditiis, quam?</h1>
           <div className="p-2 opacity-0 duration-300 group-hover:opacity-100">
            
            <div className="flex gap-x-4 flex-wrap my-3 ">
              <p className="hover:text-blue-400">
                <span><ion-icon name="person"></ion-icon></span>
                By admin
              </p>
              <p className="hover:text-blue-400">
                <span><ion-icon name="calendar"></ion-icon></span>
                December 07,2024
              </p>

              <p className="hover:text-blue-400">
                <span><ion-icon name="folder-open"></ion-icon></span>
               Digital marketing
              </p>

            </div>

           <p className="leading-8 my-2">Social media marketing is like telling a story  about something cool using the internet. Imagine....</p>
          <button className="w-fit p-2 bg-gray-50 hover:bg-white hover:text-blue-500 hover:border border-blue-500 text-black mt-2">Read More</button>
           </div>
          </div>

       </div>

    </div>
  )
}

export default Ecomerce
