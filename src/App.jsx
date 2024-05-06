/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */

import About from "./project/components/About";
import Hero from "./project/components/Hero";
import Navbar from "./project/components/Navbar";
import PremumLarning from "./project/components/PremumLarning";
import Testomonial from "./project/components/Testomonial";
import Traks from "./project/components/Traks";
import Footer from "./project/components/Footer";


const App = () => {
  

  return (
   <>
 
 <Navbar/>

 <div className="lg:px-32  p-1 translate-y-16  " style={{backgroundImage:'url(src/assets/images/Herobg.png)'}} > 
 <Hero/>
 </div>

 <div className="lg:px-32  p-1 lg:translate-y-32 md:translate-y-72 sm:translate-y-80 translate-y-96" > 
 <About/>
 </div>

 <div className=" lg:h-96  p-1 lg:translate-y-32 md:translate-y-72 sm:translate-y-80 translate-y-96   " > 
 <div className=" lg:h-80 lg:px-32" style={{backgroundImage:'url(src/assets/images/Herobg.png)'}} >
 <PremumLarning/>
 </div>
 </div>

 <div className="lg:px-32  p-1 lg:translate-y-32 md:translate-y-72 sm:translate-y-80 translate-y-96   " > 
 <Testomonial/>
 </div>

 <div className="lg:px-32  p-1 lg:translate-y-32 md:translate-y-72 sm:translate-y-80 translate-y-96" > 
 <Traks/>
 </div>

 
 <div className="lg:px-32  p-1 lg:translate-y-32 md:translate-y-80 sm:translate-y-80 translate-y-96" style={{backgroundImage:'url(src/assets/images/footer.png)'}} > 
 <Footer/>
 </div>
   </>
  );
};

export default App;
