/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination,Scrollbar } from 'swiper/modules';

import 'swiper/css';
import { useState } from 'react';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
const Testomonial = () => {
    const user=[
        {
            pic:"https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            name:"jayshankar",
            department:"Web Devloper",
            des:"repellendus placeat exercitationem odit dolores corrupti perspiciatis reiciendisrepellendus placeat exercitationem odit dolores corrupti perspiciatis reiciendis"
        },
        {
            pic:"https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg",
            name:"Jeeban Jyati",
            department:"Web Devloper",
            des:"repellendus repellendus placeat exercitationem odit dolores corrupti perspiciatis reiciendis placeat exercitationem odit dolores corrupti perspiciatis reiciendis"
        },
        {
            pic:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuCUVtWDMQJgAkH_tV1rp6TqigtMCe8yzZIbeWVe6ucQ&s",
            name:"Ajay ",
            department:"Web Devloper",
            des:"repellendus placeat exercitationem repellendus placeat exercitationem odit dolores corrupti perspiciatis reiciendis odit dolores corrupti perspiciatis reiciendis"
        },
        {
            pic:"https://i.pinimg.com/736x/2b/a2/45/2ba2455ca817f7659e9ebfe9d494c5db.jpg",
            name:"Debasish Das",
            department:"Web Devloper",
            des:"repellendus placeat exercitationem odit dolores corrupti perspiciatis reiciendisrepellendus placeat exercitationem odit dolores corrupti perspiciatis reiciendis"
        },
        {
            pic:"https://media.licdn.com/dms/image/D4D08AQE0CXu4hnoe7g/croft-frontend-shrinkToFit1024/0/1646754728586?e=2147483647&v=beta&t=ADkOVwOwmP-4rCH4y0g2_OBFlsszl01TpQPhCgt5SSc",
            name:"Sabyasachi",
            department:"Web Devloper",
            des:"repellendus repellendus placeat exercitationem odit dolores corrupti perspiciatis reiciendis placeat exercitationem odit dolores corrupti perspiciatis reiciendis"
        }
    ]
    const [index,setIndex]=useState(0)
   
  return (
    <section id='Course'>
        <div className='text-center p-3'>
            <h1 className='text-xl font-semibold md:text-2xl '>What Student's Say</h1>
            <p className='text-gray-500 text-[14px] mt-2'>sit amet, consectetur adipisicing elit. Ut ipsa sequi illo delectus?</p>
        </div>
      <Swiper
      modules={[Navigation, Pagination,Scrollbar,Autoplay]}
      spaceBetween={7}
      slidesPerView={'auto'}
      pagination={{ clickable: true }}
      loop={true}
      centeredSlides={true}
      speed={800}
      autoplay={{
        delay:3000
      }}
      onSlideChange={(swiper) => setIndex(swiper.realIndex)}
      className='md:w-[80%] md:mx-[10%] h-fit  p-3 flex gap-x-1 '
    >
        {
            user.map((user,i)=>(
                <SwiperSlide key={i} className='bg-white w-full md:w-1/3 h-60  '>
                  <div className={`w-full h-fit bg-white border shadow-md rounded-sm `}>
                    <div className='p-3 text-gray-400 text-[14px]'>
                        <p>{user.des}</p>
                    </div>
                    <div className='flex gap-x-4 p-3'>
                        <div className='h-14 w-14 overflow-hidden rounded-full bg-black'>
                            <img src={user.pic} alt="" className='object-cover object-center' />
                        </div>
                        <div>
                         <h3 className='text-[16px] font-semibold'>{user.name}</h3>
                         <p className='text-[13px] text-gray-500  font-mono'>{user.department}</p>
                        </div>
                    </div>
                  </div>
                </SwiperSlide>
            ))
        }
      
      
     
      
    </Swiper>
    </section>
  )
}

export default Testomonial
