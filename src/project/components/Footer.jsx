import logo from "../../assets/images/logo.png";

const Footer = () => {
  return (
    <section className="flex gap-2 md:p-4  justify-between">
      <div className="p-2 w-1/4">
        <img src={logo} alt="" className="h-8 my-3 " />
        <p className="text-[13px] leading-7">sit amet consectetur adipisicing  ipsum dolor, sit amet consectetur adipisicing Lorem ipsum dolor, sit amet consectetur adipisicing Lorem ipsum dolor, sit amet consectetur adipisicing  ipsum dolor, sit amet consectetur adipisicing elit. Quia, sed.</p>
      </div>
      <div className="p-2 w-1/4">
        <h1 className="font-semibold my-3">Company</h1>
        <p className="text-[13px] leading-7">sit amet consectetur adipisicing  ipsum dolor, sit amet consectetur adipisicing adipisicing, sit amet consectetur adipisicing  sit amet consectetur adipisicing  ipsum dolor, sit amet consectetur adipisicing elit. Quia, sed.</p>
      </div>
      <div className="p-2 w-1/4">
       <h1 className="font-semibold my-3">Course</h1>
        <p className="text-[13px] leading-7">sit amet consectetur adipisicing  ipsum dolor, sit amet consectetur adipisicing, sit amet consectetur adipisicing adipisicing, sit amet consectetur adipisicing ipsum dolor, sit amet consectetur adipisicing elit. Quia, sed.</p>
      </div>
      <div className="p-2 w-1/4">
       <h1 className="font-semibold my-3">Support</h1>
        <p className="text-[13px] leading-7"> adipisicing, sit amet consectetur adipisicingsit amet consectetur adipisicing  ipsum dolor, sit amet consectetur adipisicing, sit amet consectetur adipisicing  ipsum dolor, sit amet consectetur adipisicing elit. Quia, sed.</p>
      </div>
    </section>
  )
}

export default Footer
