import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import weather1 from '../assets/weather1.png'
import weather2 from '../assets/weather2.png'




import { motion } from 'framer-motion'

function Weather(props) {
    const navigate = useNavigate()
    return (
        <>
            <div className="bg-zinc-700 font-serif  pb-5">
                <div className="lg:p-10 md:p-5  xl:flex ">
                    <div className="xl:w-[50%] w-[100%] text-white h-auto p-3 mb-3">
                        <h3 className='text-xl font-semibold tracking-[1px] text-yellow-500'> Weather App </h3>
                        <h4 className='mt-3 tracking-[.2px] '> its a weather application . Here you can search your cities then you see your cities temperature , humidity , wind speed , weather image according to weather . </h4>
                        <div className=' mt-3 border-1 border-dotted border-white'></div>

                        <h3 className='mt-3 mb-3 text-xl font-semibold tracking-[1px] text-yellow-500 '>Project Details</h3>



                        <div className="flex py-2">
                            <h3 className='text-green-500 font-semibold text-[16px] '> Skills Used : </h3>
                            <h3 className='tracking-[.5px] font-normal text-base text-white ml-2'> Html , Css , Bootstrap , JavaScript , ReactJs , Redux </h3>
                        </div>
                        <div className="flex py-2">
                            <h3 className='text-green-500 font-semibold text-[16px]'> Project Link : </h3>
                            <Link to='https://weatherapss.netlify.app/'><a className='tracking-[.5px] ml-2 font-normal text-base underline text-sky-500'> Click Here </a></Link>
                        </div>
                        <div className="flex py-2">
                            <h3 className='text-green-500 font-semibold text-[16px]  '> Source Code : </h3>
                            <Link to='https://github.com/Dee-08-98/weatherapps'><a className='tracking-[.5px] ml-2 font-normal text-base underline text-sky-500'> Click Here </a></Link>

                        </div>

                        {/* <h3 className='text-green-500 font-semibold text-[16px] mt-2'> Skills Used : <span className='tracking-[.5px] font-normal text-base text-white'> Html , Css , Bootstrap , JavaScript , ReactJs </span></h3>

                        <h3 className='text-green-500 font-semibold text-[16px] mt-3'> Project Link : <Link to='https://destinytheittrainingschool.netlify.app/'><span className='tracking-[.5px]  font-normal text-base underline text-sky-500'>Click Here</span></Link></h3>

                        <h3 className='text-green-500 font-semibold text-[16px] mt-3 mb-2'> Source Code : <Link to='https://github.com/Dee-08-98/destiny.git'><span className='tracking-[.5px] font-normal text-base underline text-sky-500'>Click Here</span></Link></h3>

                         */}
                        <motion.button
                            whileHover={{ rotate: "2.5deg", background: "#20FFFF" }}
                            transition={{
                                duration: .7,
                                ease: "easeInOut",

                            }}
                            onClick={() => navigate(-1)}
                            className='   mt-2  text-black font-bold bg-yellow-500 px-4 py-2  rounded-[5px]'> Back
                        </motion.button>
                    </div>
                    <div className="xl:w-[50%] w-[100%] hidden sm:block ">
                        <h3 className='text-xl font-semibold tracking-[1px] text-yellow-500 lg:px-5 ml-4'> Project Image</h3>
                        <div className="mt-3 pt-3 px-2">


                            {/*  carosel  */}
                            <div id="carouselExampleAutoplaying" class="carousel carousel-dark slide md:px-8" data-bs-ride="carousel">
                                <div class="carousel-inner h-[300px]   ">
                                    <div class="carousel-item active  h-[300px]  " data-bs-interval="2000">
                                        <img className=' h-[100%] w-[100%]' src={weather1} class="d-block" alt="..." />
                                    </div>
                                    <div class="carousel-item  h-[300px] " data-bs-interval="2000">
                                        <img className='  h-[100%]  w-[100%]' src={weather2} class="d-block" alt="..." />
                                    </div>
                                    
                                </div>
                                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Previous</span>
                                </button>
                                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Next</span>
                                </button>
                            </div>

                            {/* carosel   */}

                        </div>

                    </div>
                </div>
            </div>

        </>
    );
}

export default Weather;