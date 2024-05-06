import { useState } from "react";
import logo from "../../assets/images/logo.png";
import { Drawer } from "@mui/material";
const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [I, setI] = useState(0);
  const [scrol, setScrol] = useState(false);
  const[open,setOpen]=useState(false)
  
  const link = [
    {
      name: "Home",
      link: "#Home",
    },
    {
      name: "About us",
      link: "#About",
    },
    {
      name: "Course",
      link: "#Course",
    },
    {
      name: "Our Service",
      link: "#Services",
    },
    {
      name: "Contact us",
      link: "#Contact",
    },
  ];
  window.addEventListener("scroll", () => {
    setScrol(window.scrollY > 20);
  });
  return (
  
    <section
      className={`lg:px-32  p-1 bg-white  fixed top-0 left-0 w-full z-30 ${
        scrol ? "shadow-md" : "shadow-none"
      }`}
    >
      <Drawer open={open} onClose={()=>setOpen(false)}>
        
      <div className=" w-96 h-96 bg-white flex flex-col justify-center items-center p-3">
     <input type="email" placeholder="Enter email"  className="w-full p-4 my-3 border"/>
     <input type="password"  placeholder="Enter password" className="w-full p-4 my-3 border"/>
     <button className="w-1/2 p-2 bg-violet-400 text-white rounded-full" >Login</button>
      </div>
     
      </Drawer>
      <nav className="flex justify-between px-3 items-center p-1">
        <img src={logo} alt="" className="h-8 md:h-12 md:mr-2" />

        <div className="flex  items-center relative">
          <ul
            className={`flex  flex-col lg:flex-row lg:gap-x-6 gap-x-4 items-center font-semibold *:cursor-pointer lg:static  absolute left-0  w-full h-auto lg:w-auto ${
              menu ? "top-12" : "-translate-y-96 lg:translate-y-0"
            } duration-300  z-20  text-center *:p-3 *:w-full lg:*:w-auto  border-b-2   lg:border-0 border-gray-50 bg-white shadow-md lg:shadow-none ${
              scrol ? "bg-inherit" : ""
            }  `}
          >
            {link.map((link, i) => (
              <a
                href={link.link}
                onClick={() => {
                  setI(i);
                  setMenu(!menu);
                }}
                key={i}
                className={`hover:bg-violet-300 md:text-[14px]  ${
                  i == I ? "lg:border-b-2 border-violet-500" : ""
                }`}
              >
                {link.name}
              </a>
            ))}
          </ul>
          <span
            className="fixed  cursor-pointer text-[25px] lg:hidden"
            onClick={() => setMenu(!menu)}
          >
            {menu ? (
              <ion-icon name="close"></ion-icon>
            ) : (
              <ion-icon name="menu"></ion-icon>
            )}
          </span>
          <button onClick={()=>setOpen(!open)} className="ml-10 py-2 px-5 text-white font-semibold rounded-full bg-violet-950 h-fit  ">
            Sign in
          </button>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
