import React from 'react';
import { motion } from 'framer-motion'
import { FaBars, FaGithub, FaHome, FaInstagram, FaLinkedin, FaUnderline } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Jumbo(props) {
    return (
        <>
            <div className="bg-black lg:py-16 ">
                
                <div className=" sm:p-6  p-3">
                    <div className="flex justify-center text-left flex-col md:px-12 lg:mx-24">
                        <h3 className='text-white font-bold sm:text-4xl text-2xl font-serif'>Hello <span className='text-green-500'> , </span> i m <span className='text-yellow-500'>Deepak kumar</span></h3>
                        <h4 className=' sm:text-3xl text-xl font-bold mt-4 text-green-500 font-serif'>Mern-Stack Developer</h4>
                        <p className='text-white mt-4 font-serif hidden lg:block'>I am a MERN Full Stack Developer with experience in developing dynamic and responsive web applications using React_JS. I am good at UI , React and know my way around backend stuff too . I use tools like MongoDB , Express_JS and Node_JS to make cool web apps . I keep learning new things to stay on top of the latest tech trends .</p>
                        <p className='text-white mt-4 font-serif lg:hidden'>I am a MERN Full Stack Developer with experience in developing dynamic and responsive web applications using React_JS. I am good at UI , React and know my way around backend stuff too . I use tools like MongoDB , Express_JS and Node_JS to make cool web apps . I keep learning new things to stay on top of the latest tech trends .</p>
                        <Link to='https://drive.google.com/file/d/1Nid4kxS60uK6XrNm9OYWGzcaYOKhXRqU/view?pli=1'><motion.button
                            whileHover={{ rotate: "2.5deg", background: "#20FFFF" }}
                            transition={{
                                duration: .7,
                                ease: "easeIn",
                            }}
                            className='text-black mt-3 h-10 w-32 font-bold tracking-wider cursor-pointer bg-yellow-500'>Resume</motion.button></Link>
                            
                        <div className=" text-white flex mb-4   mt-4">
                         <Link to='https://github.com/Dee-08-98'>  <motion.span
                                whileHover={{ rotate: "360deg" }}
                                transition={{
                                    duration: 1,
                                    ease: "easeIn",
                                }}
                            ><FaGithub className='cursor-pointer text-sky-300 mx-2 text-xl' /></motion.span></Link> 
                            <Link to='https://www.linkedin.com/in/deepak0898'><motion.span
                                whileHover={{ rotate: "360deg" }}
                                transition={{
                                    duration: .7,
                                    ease: "easeIn",
                                }}
                            ><FaLinkedin className='cursor-pointer text-sky-300 mx-2 text-xl' /></motion.span></Link>
                            <Link to='https://www.instagram.com/kingdeepakkr/?next=%2F'><motion.span
                                whileHover={{ rotate: "360deg", }}
                                transition={{
                                    duration: .7,
                                    ease: "easeIn",
                                }}
                            ><FaInstagram  className='cursor-pointer text-sky-300 mx-2 text-xl' /></motion.span></Link>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}

export default Jumbo;