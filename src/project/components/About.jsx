import rating from "../../assets/images/Group 345.png"
import "aos/dist/aos.css";
import Aos from "aos";
import { useEffect } from "react";
const About = () => {
  useEffect(() => {
    Aos.init({
      offset: 300,
      duration: 400,
      easing: "ease-in-sine",
    });
  }, []);
  const card=[
    {
      img:"https://img.freepik.com/free-vector/gradient-ui-ux-background_23-2149052117.jpg",
      title:"UI/UX Desiner for Beginner",
      price:77,
      job:"UI/UX Desiner"
    },
    {
      img:"https://www.theforage.com/blog/wp-content/uploads/2022/09/what-is-a-web-developer.jpg",
      title:"FullStack Devloper for Beginner",
      price:89,
      job:"Web Devloper"
    },
    {
      img:"https://www.naukri.com/campus/career-guidance/wp-content/uploads/2023/11/what-is-data-science.jpg",
      title:"Data Science for Beginner",
      price:66,
      job:"Data Scienctist"
    },
  ]
  return (
    <section id="About" className="">
      <div className="text-center w-full p-2">
        <h2 className="lg:text-3xl md:text-2xl text-xl font-semibold ">
          Our Tracks
        </h2>
        <p className="text-gray-400 text-[14px] font-semibold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus,
          quia?
        </p>
      </div>  
           <div className="flex flex-col md:flex-row  items-center justify-evenly py-7">
                {
                  card.map((card,i)=>(
                    <div key={i} data-aos="zoom-in" data-aos-delay={`${200*i-50}`} className=" relative h-fit w-96 p-3 bg-white border   rounded-lg shadow-md md:mt-3 mt-6 mx-1  ">
                      <div className=" mx-auto">
                        <img src={card.img} alt="" className="h-52 w-full object-center object-cover  hover:scale-105 duration-300 cursor-pointer " />
                      </div>
                      <div className=" mt-3">
                        <div className="flex justify-between">
                        <p className="text-gray-400 text-[13px] font-semibold">{card.job}</p>
                        <img src={rating} alt="" className="h-3 md:h-4 mr-3" />
                        </div>
                        <h3 className=" font-semibold text-[17px] mt-1">{card.title}</h3>
                        <h4 className="text-orange-500 cursor-pointer font-semibold mt-1">${card.price}</h4>
                      </div>
                      <hr />
                      <div className=" mt-1 mb-5 *:text-[12px] *:text-gray-400 flex gap-x-3 *:flex *:items-center *:gap-x-2  ">
                        <span><ion-icon name="time-outline"></ion-icon> 22hr 30min</span>
                        <span><ion-icon name="videocam-outline"></ion-icon>34 Courses</span>
                        <span><ion-icon name="arrow-down-outline"></ion-icon>250 Sales</span>
                      </div>
                      <button className="text-white bg-orange-500 py-2 px-3 rounded-full absolute z-10 left-[35%] lg:left-[35%] md:left-[28%] -bottom-[5%] border font-semibold">Join Course</button>
                    </div>
                  ))
                }
           </div>
      <div>

      </div>
    </section>
  );
};

export default About;
