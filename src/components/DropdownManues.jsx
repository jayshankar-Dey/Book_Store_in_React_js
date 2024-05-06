import Droplist from "./Droplist";


const DropdownManues = () => {
    const list = [
        {
          title: "this is informed to do does not make it",
          list: [
            " ipsum dolor sit amet.",
            "rem ipsum dolor sit amet.",
            "orem ipsum dolor sit amet.",
            "ipsum dolor sit amet.",
            "Lorem ipsum dolor sit amet.",
          ],
        },
        {
          title: "in case of is informed to do this",
          list: [
            " ipsum dolor sit amet.",
            "rem ipsum dolor sit amet.",
            "orem ipsum dolor sit amet.",
            "Lorem ipsum dolor sit amet.",
          ],
        },
        {
          title: "informed to to do does not make it",
          list: [
            " ipsum dolor sit amet.",
            "rem ipsum dolor sit amet.",
            "orem ipsum dolor sit amet.",
          ],
        },
        {
          title: "arround to it does not make it",
          list: [
            " ipsum dolor sit amet.",
            "rem ipsum dolor sit amet.",
            "orem ipsum dolor sit amet.",
            "ipsum dolor sit amet.",
            "Lorem ipsum dolor sit amet.",
          ],
        },
        
      ];
  return (
    <>
       <div className="w-full h-auto flex lg:flex-row  flex-col justify-center box-border    ">
       <div className=" bg-blue-900 w-full lg:w-[50%]  md:rounded-md z-10 p-5 md:translate-x-10   md:py-24 py-20 md:translate-y-16 overflow-hidden">
       <h1 className=" text-4xl font-bold w-20 md:ml-20 m-4 text-sky-300 ">FAQ</h1>
       {list.map((list, i) => (
          <div key={i} className="p-0 md:mx-20  ">

            <Droplist list={list} />
          </div>
        ))}
       </div>
       <div className="w-full lg:w-[60%] h-96 bottom-4 border-black ">
<img src="https://images.prismic.io/turing/652ec6fefbd9a45bcec81a1f_Coder_a63a8aeefd.webp?auto=format%2Ccompress&fit=max&w=3840" alt="" />
       </div>
      </div>
    </>
  )
}

export default DropdownManues
