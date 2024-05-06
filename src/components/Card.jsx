// eslint-disable-next-line no-unused-vars

import shooes1 from '../assets/1.png'
import shooes2 from '../assets/hightlightimg.png'
import shooes3 from '../assets/hero.png'

const Card = () => {
   
  return (
    <>
    <div className="lg:px-44 px-10 h-screen flex flex-col justify-center items-center w-full p-y-10">
      <div className="w-full lg:w-[770px] mt-72  lg:mb-0  lg:mt-0  sm:mt-96 md:mt-[700px] h-auto  p-1  rounded-lg flex flex-col lg:flex-row  ">
        
     <div  className="lg:w-[50%]  w-full h-full  mr-1 flex flex-col gap-4">

         <div  className="flex  lg:flex-row flex-col-reverse items-center text-center lg:items-start lg:text-start  rounded-lg bg-gray-100">
            <div className="lg:w-[50%] w-full p-2 ">
                <span className="text-[10px] text-gray-400 font-semibold lg:text-[15px]">UNDER ARMER</span>
                <h1 className='font-bold my-2'>Flow FUTR X2 Black <br /> History Month</h1>
                <p className="text-[13px] text-gray-400 font-bold lg:text-[15px]">Basketbol</p>
                <button className='bg-black text-white px-6 rounded-full mt-3 font-semibold py-2'>$389.00</button>
            </div>
            <div className="w-[50%] py-10 px-1">
                <img src={shooes3} alt="" className='mt-11 lg:mt-auto  ' />
            </div>
         </div>

         <div  className="flex lg:flex-row flex-col-reverse items-center text-center lg:items-start lg:text-start  rounded-lg bg-gray-100 mb-3 lg:mb-auto">
            <div className="lg:w-[50%] w-full p-2">
                <span className="text-[10px] text-gray-400 font-semibold lg:text-[15px]">UNDER ARMER</span>
                <h1 className='font-bold my-2'>Rock BSR Traning Shoose <br /> History Month</h1>
                <p className="text-[13px] text-gray-400 font-bold lg:text-[15px]">Basketbol</p>
                <button className='bg-black text-white px-6 rounded-full mt-3 font-semibold py-2'>$689.00</button>
            </div>
            <div className="w-[50%] py-10 px-1">
                <img src={shooes1} alt="" className='' />
            </div>
         </div>

     </div>
     <div  className="lg:w-[50%] h-full  ml-1 flex flex-col justify-center items-center bg-gray-100 rounded-lg p-2">

     <img src={shooes2} alt="" className='lg:h-40  lg:m-5 '/>
     <span className="text-[10px] text-gray-400 font-semibold mt-2 lg:text-[15px]">UNDER ARMER</span>
     <h1 className='font-bold my-2 text-center'>Unisex BSR Traning Shoose <br /> History Month</h1>
     <p className="text-[13px] text-gray-400 font-bold lg:text-[15px]">Curry Brand Shoose Basketbol</p>
     <button className='bg-black text-white px-10 rounded-full mt-4 font-semibold py-2'>$689.00</button>
     </div>
      </div>
      
    </div>
    </>
  )
}

export default Card