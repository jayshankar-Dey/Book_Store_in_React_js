import { useEffect, useState } from "react";
import hero from "../../assets/images/Hero.png";
import img1 from "../../assets/images/certification 1.png";
import img2 from "../../assets/images/exam 1.png";
import img3 from "../../assets/images/online-test 1.png";
import "aos/dist/aos.css";
import Aos from "aos";
import Dialog from "@mui/material/Dialog";
const Hero = () => {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState({});
  
  useEffect(() => {
    Aos.init({
      offset: 300,
      duration: 400,
      easing: "ease-in-sine",
    });
  }, []);
  const list = [
    {
      img: img3,
      title: "Learn the Latest Skills",
      des: "accusantium quibusdam autem esse distinctio itaque corporisveniam fuga",
    },
    {
      img: img2,
      title: "Get Ready For Career",
      des: "amet quibusdam autem esse distinctio itaque corporisveniam ",
    },
    {
      img: img1,
      title: "Earn a Cartificate",
      des: "dolor sit quibusdam autem esse distinctio itaque corporisveniam fuga",
    },
  ];
  return (
    <section id="Home" className=" md:p-2   w-full h-[80%] lg:flex relative ">
      <div
        data-aos="zoom-in"
        data-aos-delay="300"
        className="w-full lg:w-[50%]  items-center p-4   justify-start lg:py-40 md:py-2  py-14"
      >
        <h2 className="text-4xl font-bold">
          The <span className="text-orange-400">Smart</span> <br />
          Choice For <span className="text-orange-400">Future</span>
        </h2>
        <p className="pt-4 text-gray-400 font-semibold text-[14px]">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio minus
          iure accusantium quibusdam autem esse distinctio itaque corporis
          veniam
        </p>

        <div className="w-full md:w-[70%] lg:w-[80%] p-1 bg-white lg:mt-10 mt-7 flex gap-2 px-2 py-1 items-center rounded-full cursor-pointer text-[13px] md:text-[16px] font-semibold">
          <label
            htmlFor="search"
            className="text-[20px] font-bold ml-4 cursor-pointer"
          >
            <ion-icon name="search-outline"></ion-icon>
          </label>
          <input
            type="text"
            name=""
            id="search"
            placeholder="search for the location..."
            className="h-full w-full py-2 outline-none"
          />
          <button className="rounded-full px-3 bg-violet-950 py-2 text-white ">
            Continue
          </button>
        </div>
      </div>

      <div
        data-aos="zoom-in"
        data-aos-delay="400"
        className="w-full lg:w-[50%] lg:h-[550px] md:h-[450px] h-[50%]   flex items-center justify-center px-4 md:px-6 md:p-2 py-10 md:py-0"
      >
        <img src={hero} alt="" className="h-72" />
      </div>

      <div  className="p-4 w-full bg-violet-950 absolute md:-bottom-[32%] sm:-bottom-[37%] -bottom-[45%] md:w-[90%] lg:w-[95%] lg:mx-[2.5%] md:mx-[4%] flex gap-4 justify-between flex-col lg:flex-row lg:-bottom-[11%]  rounded-md shadow-md overflow-hidden lg:py-7">
        {list.map((list, i) => (
          <div
            key={i}
            
            className="h-fit lg:w-1/3  p-2 text-white flex gap-3 cursor-pointer"
            onClick={() => {
              setOpen(!open);
              setData(list);
            }}
          >
            <div className="flex justify-center items-center w-24  ">
              <div className="p-2  bg-slate-400 rounded-lg w-fit h-fit mr-3 flex justify-center items-center">
                <img
                  src={list.img}
                  alt=""
                  className="h-8 w-8 lg:h-fit lg:w-fit sm:h-fit  "
                />
              </div>
            </div>
            <div>
              <h3 className="font-semibold truncate">{list.title}</h3>
              <p className="text-[13px] mt-1 text-gray-300 ">{list.des}</p>
            </div>
          </div>
        ))}
      </div>
      <Dialog onClose={() => setOpen(!open)} open={open}>
        <div className="w-full h-full flex justify-center items-center">
          <div className="w-full m-5 md:w-[26rem] h-fit p-2 bg-white relative">
            <span
              onClick={() => setOpen(!open)}
              className="text-[23px] absolute top-2 right-3 text-red-400 cursor-pointer"
            >
              <ion-icon name="close-outline"></ion-icon>
            </span>
            <img src={data?.img} alt="" />
            <h3 className="text-2xl font-bold my-3">
            {data?.title}
             
            </h3>
            <p className="text-[14px] font-semibold text-gray-400">
            {data?.des}
            </p>
          </div>
        </div>
      </Dialog>
    </section>
  );
};

export default Hero;
