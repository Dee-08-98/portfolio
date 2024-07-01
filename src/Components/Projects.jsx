import React from 'react';
import bill3 from '../assets/bill4.png'
import weather1 from '../assets/weather1.png'
import india from '../assets/hotel.png'
import des from '../assets/des.png'
import H1 from '../assets/H1.png'
import Food from '../assets/Food.png'
import taj1 from '../assets/tajj3.png'
import chat5 from '../assets/chat5.png'
import { AnimatePresence, motion } from 'framer-motion'
import { Link } from 'react-router-dom';
function Projects(props) {
    return (
        <>
            <div className="bg-zinc-700 font-serif pb-5">
                <div className="mb-5">
                    <div className="  pt-8 pb-8 text-center flex justify-center items-center">
                        <div className='border-b-2 border-white w-40 '></div>
                        <h2 className='  text-3xl font-bold text-white mx-2'>My<span className='text-yellow-400'> Project</span></h2>
                        <div className='border-b-2 border-white w-40 '></div>
                    </div>
                </div>
                <div className="lg:px-20 px-2 md:px-5 mb-5">
                    <div className="lg:px-36">
                        <h3 className='text-xl font-bold text-yellow-500'> UI Projects</h3>
                        <div className='border-1 border-white lg:w-[15%] w-[50%] md:w-[30%] border-dotted'></div>
                    </div>
                    <div className="w-[100%] flex justify-evenly lg:justify-center items-center flex-wrap">

                        <div className="w-[94%] sm:w-[270px] md:w-[330px]  lg:w-[400px]  h-auto  mt-5  md:px-2 lg:px-3">
                            <div className="w-[100%] sm:w-[270px] md:w-[330px] lg:w-[350px] h-[320px] lg:h-[300px] md:h-[300px] lg:px-2 md:px-1">
                                <img className=' w-[100%] sm:w-[270px] md:w-[330px] lg:w-[350px] h-[320px] lg:h-[300px] md:h-[300px] rounded-[15px]' src={india} alt="Loading..." />
                            </div>

                            <div className="w-[100%] sm:w-[270px] md:w-[330px] lg:w-[350px] h-auto min-h-[80px] lg:px-2 md:px-1">
                                <h3 className=' ml-3 mt-2 font-normal text-white' > <span className='text-xl font-bold text-green-500'> Name : </span> India Tour and Travel Agency</h3>

                                <h3 className=' ml-3  font-normal text-white' > <span className='text-xl font-bold text-green-500'> Desc : </span> It's my 1st website and i made it during learning Web Devlopment</h3>
                            </div>
                            <Link to='/project/travelAgency'><motion.button
                                whileHover={{ rotate: "2.5deg", background: "#20FFFF" }}
                                transition={{
                                    duration: .7,
                                    ease: "easeInOut",

                                }}
                                className=' ml-3  mt-2  text-black font-bold bg-yellow-500 px-4 py-2  rounded-[5px]'> Read More...
                            </motion.button></Link>
                        </div>
                        <div className="w-[94%] sm:w-[270px] md:w-[330px] lg:w-[400px] h-auto  mt-5  md:px-2 lg:px-3">
                            <div className="w-[100%] sm:w-[270px] md:w-[330px] lg:w-[350px] h-[320px] lg:h-[300px] md:h-[300px] lg:px-2 md:px-1">
                                <img className=' w-[100%] sm:w-[270px] md:w-[330px] lg:w-[350px] h-[320px] lg:h-[300px] md:h-[300px] rounded-[15px]' src={des} alt="Loading..." />
                            </div>

                            <div className="w-[100%] sm:w-[270px] md:w-[330px] lg:w-[350px] h-auto min-h-[80px] lg:px-2 md:px-1">
                                <h3 className=' ml-3 mt-2 font-normal text-white' > <span className='text-xl font-bold text-green-500'> Name : </span> Destiny The IT Training School</h3>

                                <h3 className=' ml-3  font-normal text-white' > <span className='text-xl font-bold text-green-500'> Desc : </span> It's clone of my institute website Ducat The IT Training School</h3>
                            </div>

                            <Link to='/project/destiny'><motion.button
                                whileHover={{ rotate: "2.5deg", background: "#20FFFF" }}
                                transition={{
                                    duration: .7,
                                    ease: "easeInOut",

                                }}
                                className=' ml-3  mt-2  text-black font-bold bg-yellow-500 px-4 py-2  rounded-[5px]'> Read More...
                            </motion.button></Link>
                        </div>
                        <div className="w-[94%] sm:w-[270px]  md:w-[330px] lg:w-[400px] h-auto  mt-5 md:px-2 lg:px-3">
                            <div className="w-[100%] sm:w-[270px] md:w-[330px] lg:w-[350px] h-[320px] lg:h-[300px] md:h-[300px] lg:px-2 md:px-1">
                                <img className=' w-[100%] sm:w-[270px] md:w-[330px] lg:w-[350px] h-[320px] lg:h-[300px] md:h-[300px] rounded-[15px]' src={H1} alt="Loading..." />
                            </div>

                            <div className="w-[100%] sm:w-[270px] md:w-[330px] lg:w-[350px] h-auto min-h-[80px] lg:px-2 md:px-1">
                                <h3 className=' ml-3 mt-2 font-normal text-white' > <span className='text-xl font-bold text-green-500'> Name : </span> Hotel Madhuban</h3>

                                <h3 className=' ml-3  font-normal text-white' > <span className='text-xl font-bold text-green-500'> Desc : </span> It's a Hotel website </h3>
                            </div>

                            <Link to='/project/hotelMadhuban'><motion.button
                                whileHover={{ rotate: "2.5deg", background: "#20FFFF" }}
                                transition={{
                                    duration: .7,
                                    ease: "easeInOut",

                                }}
                                className=' ml-3  mt-2  text-black font-bold bg-yellow-500 px-4 py-2  rounded-[5px]'> Read More...
                            </motion.button></Link>
                        </div>

                    </div>
                </div>
                <div className="lg:px-20 py-10 px-2 md:px-5  ">
                    <div className="lg:px-36 ">
                        <h3 className='text-xl font-bold text-yellow-500'> ReactJS Projects</h3>
                        <div className='border-1 border-white lg:w-[15%] w-[50%] md:w-[30%] border-dotted'></div>
                    </div>
                    <div className="w-[100%] flex justify-evenly lg:justify-center items-center flex-wrap">

                        <div className="w-[94%] sm:w-[270px] md:w-[330px]  lg:w-[400px]  h-auto  mt-5  md:px-2 lg:px-3">
                            <div className="w-[100%] sm:w-[270px] md:w-[330px] lg:w-[350px] h-[320px] lg:h-[300px] md:h-[300px] lg:px-2 md:px-1">
                                <img className=' w-[100%] sm:w-[270px] md:w-[330px] lg:w-[350px] h-[320px] lg:h-[300px] md:h-[300px] rounded-[15px]' src={bill3} alt="Loading..." />
                            </div>

                            <div className="w-[100%] sm:w-[270px] md:w-[330px] lg:w-[350px] h-auto min-h-[80px] lg:px-2 md:px-1">
                                <h3 className=' ml-3 mt-2 font-normal text-white' > <span className='text-xl font-bold text-green-500'> Name : </span> Bill Generator App</h3>

                                <h3 className=' ml-3  font-normal text-white' > <span className='text-xl font-bold text-green-500'> Desc : </span> It's a Bill generating website where u generate your bill according to items</h3>
                            </div>

                            <Link to='/project/billGenerator'><motion.button
                                whileHover={{ rotate: "2.5deg", background: "#20FFFF" }}
                                transition={{
                                    duration: .7,
                                    ease: "easeInOut",

                                }}
                                className=' ml-3  mt-2  text-black font-bold bg-yellow-500 px-4 py-2  rounded-[5px]'> Read More...
                            </motion.button></Link>                      </div>
                        <div className="w-[94%] sm:w-[270px] md:w-[330px]  lg:w-[400px]  h-auto  mt-5  md:px-2 lg:px-3">
                            <div className="w-[100%] sm:w-[270px] md:w-[330px] lg:w-[350px] h-[320px] lg:h-[300px] md:h-[300px] lg:px-2 md:px-1">
                                <img className=' w-[100%] sm:w-[270px] md:w-[330px] lg:w-[350px] h-[320px] lg:h-[300px] md:h-[300px] rounded-[15px]' src={weather1} alt="Loading..." />
                            </div>

                            <div className="w-[100%] sm:w-[270px] md:w-[330px] lg:w-[350px] h-auto min-h-[80px] lg:px-2 md:px-1">
                                <h3 className=' ml-3 mt-2 font-normal text-white' > <span className='text-xl font-bold text-green-500'> Name : </span> Weather App</h3>

                                <h3 className=' ml-3  font-normal text-white' > <span className='text-xl font-bold text-green-500'> Desc : </span> It's a weather app where see weather , humidity etc. according to cities</h3>
                            </div>

                            <Link to='/project/weather'><motion.button
                                whileHover={{ rotate: "2.5deg", background: "#20FFFF" }}
                                transition={{
                                    duration: .7,
                                    ease: "easeInOut",

                                }}
                                className=' ml-3  mt-2  text-black font-bold bg-yellow-500 px-4 py-2  rounded-[5px]'> Read More...
                            </motion.button></Link>                       </div>


                    </div>
                </div>
                <div className="lg:px-20 py-10 px-2 md:px-5  ">
                    <div className="lg:px-36 ">
                        <h3 className='text-xl font-bold text-yellow-500'> MERN Projects</h3>
                        <div className='border-1 border-white lg:w-[15%] w-[50%] md:w-[30%] border-dotted'></div>
                    </div>
                    <div className="w-[100%] flex justify-evenly lg:justify-center items-center flex-wrap">

                        <div className="w-[94%] sm:w-[270px] md:w-[330px]  lg:w-[400px]  h-auto  mt-5  md:px-2 lg:px-3">
                            <div className="w-[100%] sm:w-[270px] md:w-[330px] lg:w-[350px] h-[320px] lg:h-[300px] md:h-[300px] lg:px-2 md:px-1">
                                <img className=' w-[100%] sm:w-[270px] md:w-[330px] lg:w-[350px] h-[320px] lg:h-[300px] md:h-[300px] rounded-[15px]' src={Food} alt="Loading..." />
                            </div>

                            <div className="w-[100%] sm:w-[270px] md:w-[330px] lg:w-[350px] h-auto min-h-[80px] lg:px-2 md:px-1">
                                <h3 className=' ml-3 mt-2 font-normal text-white' > <span className='text-xl font-bold text-green-500'> Name : </span> Foodies </h3>

                                <h3 className=' ml-3  font-normal text-white' > <span className='text-xl font-bold text-green-500'> Desc : </span> It's a combination of restorent and food delivery app  </h3>
                            </div>

                            <Link to='/project/foodies'><motion.button
                                whileHover={{ rotate: "2.5deg", background: "#20FFFF" }}
                                transition={{
                                    duration: .7,
                                    ease: "easeInOut",

                                }}
                                className=' ml-3  mt-2  text-black font-bold bg-yellow-500 px-4 py-2  rounded-[5px]'> Read More...
                            </motion.button></Link>                       </div>
                        <div className="w-[94%] sm:w-[270px] md:w-[330px]  lg:w-[400px]  h-auto  mt-5  md:px-2 lg:px-3">
                            <div className="w-[100%] sm:w-[270px] md:w-[330px] lg:w-[350px] h-[320px] lg:h-[300px] md:h-[300px] lg:px-2 md:px-1">
                                <img className=' w-[100%] sm:w-[270px] md:w-[330px] lg:w-[350px] h-[320px] lg:h-[300px] md:h-[300px] rounded-[15px]' src={taj1} alt="Loading..." />
                            </div>

                            <div className="w-[100%] sm:w-[270px] md:w-[330px] lg:w-[350px] h-auto min-h-[80px] lg:px-2 md:px-1">
                                <h3 className=' ml-3 mt-2 font-normal text-white' > <span className='text-xl font-bold text-green-500'> Name : </span> The Tajj</h3>

                                <h3 className=' ml-3  font-normal text-white' > <span className='text-xl font-bold text-green-500'> Desc : </span> It's  a clone of Tajj Holidays website with some changes</h3>
                            </div>

                            <Link to='/project/tajjHolidays'><motion.button
                                whileHover={{ rotate: "2.5deg", background: "#20FFFF" }}
                                transition={{
                                    duration: .7,
                                    ease: "easeInOut",

                                }}
                                className=' ml-3  mt-2  text-black font-bold bg-yellow-500 px-4 py-2  rounded-[5px]'> Read More...
                            </motion.button></Link>                        </div>
                        <div className="w-[94%] sm:w-[270px] md:w-[330px]  lg:w-[400px]  h-auto  mt-5  md:px-2 lg:px-3">
                            <div className="w-[100%] sm:w-[270px] md:w-[330px] lg:w-[350px] h-[320px] lg:h-[300px] md:h-[300px] lg:px-2 md:px-1">
                                <img className=' w-[100%] sm:w-[270px] md:w-[330px] lg:w-[350px] h-[320px] lg:h-[300px] md:h-[300px] rounded-[15px]' src={chat5} alt="Loading..." />
                            </div>

                            <div className="w-[100%] sm:w-[270px] md:w-[330px] lg:w-[350px] h-auto min-h-[80px]
                              lg:px-2 md:px-1">
                                <h3 className=' ml-3 mt-2 font-normal text-white' > <span className='text-xl font-bold text-green-500'> Name : </span> Chat Application</h3>

                                <h3 className=' ml-3  font-normal text-white' > <span className='text-xl font-bold text-green-500'> Desc : </span> It's a simple group chat application  </h3>

                            </div>
                            <Link to='/project/chat'><motion.button
                                whileHover={{ rotate: "2.5deg", background: "#20FFFF" }}
                                transition={{
                                    duration: .7,
                                    ease: "easeInOut",

                                }}
                                className=' ml-3  mt-2  text-black font-bold bg-yellow-500 px-4 py-2  rounded-[5px]'> Read More...
                            </motion.button></Link>
                        </div>


                    </div>
                </div>
            </div>
        </>
    );
}

export default Projects;