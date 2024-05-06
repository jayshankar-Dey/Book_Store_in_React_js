

const Cards = () => {
  return (
    <div  className="h-fit mt-2 md:mt-1 w-60 bg-slate-100 border shadow-md rounded-lg overflow-hidden ">
    <div className="relative group   ">

    <img src="https://m.media-amazon.com/images/I/81ZUL5rCfmL._AC_UY1100_.jpg" alt="" className="h-full cursor-pointer " />
    <img src="https://m.media-amazon.com/images/I/41-+bi4KSaL._SR240,220_.jpg" alt=""  className="absolute top-0  h-full cursor-pointer  group-hover:scale-0 duration-75 "/>

    <button className="absolute bg-white p-2 font-semibold rounded-md shadow-xl left-[30%] sm:left-[30%]  duration-300 group-hover:-translate-y-20 hover:bg-gray-500 hover:text-white">Add to cart</button>

    <div className="absolute h-48 w-8 -right-14 duration-300 top-4 flex flex-col gap-4 justify-center items-center *:bg-slate-100 *:px-2 *:py-1 *:rounded-full md:*:text-[18px] *:border-2 *:shadow-lg  group-hover:-translate-x-16 ">
    <span ><ion-icon name="heart-half-outline"></ion-icon></span>
      <span><ion-icon name="eye-outline"></ion-icon></span>
      <span><ion-icon name="medal-outline"></ion-icon></span>
    </div >
      
    </div>
    </div>
  )
}

export default Cards