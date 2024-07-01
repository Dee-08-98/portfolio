import React from 'react';
import deepak from '../assets/deepak.jpg'

function Info(props) {
    return (
        <>
            <div className=" bg-zinc-700 font-serif">
                <div className="  pt-8 pb-8 text-center flex justify-center items-center">
                    <div className='border-b-2 border-white w-40 '></div>
                    <h2 className='  text-3xl font-bold text-white mx-2'>About<span className='text-yellow-400'> Me</span></h2>
                    <div className='border-b-2 border-white w-40 '></div>
                </div>
                <div className="text-white lg:flex pb-7 ">
                    <div className="lg:w-[50%] w-[100%] pl-7 md:pl-16 lg:pl-20">

                        <h3 className='text-xl font-semibold tracking-[1px] text-yellow-500'> Mern-Stack Developer</h3>
                        <h4 className='mt-3 tracking-[.2px]'>I am a motivated and versatile individual , always eager to take a new challenges . With a passion for learning i am dedicated to delivering high-quality results . with a positive attitude and a growth mindset , i am ready to make a meaningful contribution and achieve great things. </h4>

                        <div className=' mt-3 border-b-2 border-dotted border-white'></div>

                        <h3 className='mt-3 mb-3 text-xl font-semibold tracking-[1px] text-yellow-500 '>Personal Details</h3>

                        <h3 className='text-green-500 font-semibold text-[16px] mt-2'> Name : <span className='tracking-[.5px] font-normal text-base text-white'> Deepak kumar  </span></h3>

                        <h3 className='text-green-500 font-semibold text-[16px] mt-2'> D.O.B : <span className='tracking-[.5px] font-normal text-base text-white'> 8th April 1998  </span></h3>

                        <h3 className='text-green-500 font-semibold text-[16px] mt-2'> Designation : <span className='tracking-[.5px] font-normal text-base text-white'> Mern-Stack Developer  </span></h3>

                        <h3 className='text-green-500 font-semibold text-[16px] mt-2'> Experience : <span className='tracking-[.5px] font-normal text-base text-white'> Fresher  </span></h3>

                        <h3 className='text-green-500 font-semibold text-[16px] mt-2'> Current - Address : <span className='tracking-[.5px] font-normal text-base text-white'> Vinay Nagar chowk , Faridabad , Hariyana , 121013  </span></h3>

                        <h3 className='text-green-500 font-semibold text-[16px] mt-2'> Permanent - Address : <span className='tracking-[.5px] font-normal text-base text-white'> At + Post - Sanskrit Nirmali , Supaul , Bihar , 854339  </span></h3>

                       
                        <h3 className='text-green-500 font-semibold text-[16px] mt-2'> Email : <span className='tracking-[.5px] font-normal text-base text-white'> dkkr30907@gmail.com  </span></h3>

                        <h3 className='text-green-500 font-semibold text-[16px] mt-2'> Contact No : <span className='tracking-[.5px] font-normal text-base text-white'>  +91 8709345623   </span></h3>

                    

                    </div>
                    <div className="lg:w-[50%] w-[100%] p-10 flex justify-center items-center ">
                        <img className='lg:h-[320px] lg:w-[320px] h-[250px] w-[250px] rounded-full' src={deepak} alt="Loading" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Info;