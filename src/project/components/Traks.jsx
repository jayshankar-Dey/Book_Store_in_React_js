import "aos/dist/aos.css";
import Aos from "aos";
import { useEffect } from "react";

const Traks = () => {
    useEffect(() => {
        Aos.init({
          offset: 300,
          duration: 400,
          easing: "ease-in-sine",
        });
      }, []);
    const card=[
        {
          img:"https://www.teacherbuilder.com/wp-content/uploads/2023/07/how-to-become-a-cs-teacher-in-texas-1.jpg",
          title1:"Matthew Mcnatt",
          title2:"professor Matthew Mcnatt",
          profesion:"Engineering Physics",
          des:"traks psum dolor sit, amet consectetur adipisicing elit. Aliquid, ratione!"
        },
        {
            img:"https://thumbs.dreamstime.com/b/pretty-teacher-using-laptop-computer-class-elementary-school-50495064.jpg",
            title1:"Matthew Mcnatt",
            title2:"professor Matthew Mcnatt",
            profesion:"Engineering Physics",
            des:"traks psum dolor sit, amet consectetur adipisicing elit. Aliquid, ratione!"
          },
          {
            img:"https://png.pngtree.com/thumb_back/fh260/background/20220216/pngtree-teacher-with-class-in-computer-room-photo-photo-image_29612906.jpg",
            title1:"Matthew Mcnatt",
            title2:"professor Matthew Mcnatt",
            profesion:"Engineering Physics",
            des:"traks psum dolor sit, amet consectetur adipisicing elit. Aliquid, ratione!"
          },
      ]
  return (
    <>
    <section id="Services">
      <div className="text-center my-2 p-2">
        <h1 className="text-3xl  font-semibold">Our Tracks</h1>
        <p className="text-[14px] text-gray-400 my-2"> sit amet consectetur adipisicing elit. Illo minima laudantium eius provident delectus odit perferendis iure facere quasi eum?</p>
      </div>
      <div className="flex gap-x-3 flex-col md:flex-row justify-center items-center gap-y-3 group">
        {
            card.map((card,i)=>(
                <div key={i} data-aos="zoom-in" data-aos-delay={`${200*i}`} className="border w-96 mx-3 rounded-md shadow-md group-hover:blur-sm cursor-pointer hover:!blur-none ">
                    <div className="p-3 w-full  duration-300 ">
                        <img src={card.img} alt="" className="object-cover object-center w-full h-52  hover:scale-105 duration-300" />
                    </div>
                    <div className="p-2">
                        <p className="font-semibold">{card.title1}</p>
                        <p className="text-gray-500 text-[13px]">{card.title2}</p>
                        <p className="mt-2 text-gray-500 text-[13px]">{card.des}</p>
                    </div>
                   <div className="flex justify-between p-2">
                   <p className=" font-semibold text-red-400 ">{card.profesion}</p>
                   <img src="https://i.pngimg.me/thumb/f/720/m2i8d3d3b1d3Z5A0.jpg" alt="" className="h-5" />
                   </div>
                </div>
            ))
        }
      </div>
{/* footer */}
      <div  className=" bg-violet-800 p-4 rounded-md flex flex-col justify-center mt-5  mb-12 ">
        <div className="text-center">
            <h1 className="text-2xl text-white font-semibold">Subscribe to our newslatter</h1>
            <p className="text-[13px] text-gray-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo vero perferendis nihil.</p>
            </div>
            <div  className="flex justify-center mt-5 mb-10">
                <div className="flex p-1 w-96 md:w-[600px] bg-white gap-x-2 rounded-full overflow-hidden">
                    <input type="text" placeholder="Email address" className="w-full mx-2 outline-none px-4 font-semibold" />
                    <button className="p-2 px-7 bg-orange-500 rounded-full text-white  ">Send</button>
                </div>
            </div>
      </div>
      {/* //endfoote */}
    </section>
    
      
    
    </>
  )
}

export default Traks
