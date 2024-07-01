import React from 'react';
import { FaBars, FaGithub, FaHome, FaInstagram, FaLinkedin, FaUnderline } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import deepak from '../../assets/deepak.jpg'
import { motion } from 'framer-motion'
function Nav(props) {
    return (
        <>
            <div className="bg-black ">
                <nav className="navbar navbar-expand-lg py-3">
                    <div className="container-fluid md:px-16  lg:px-40">
                        <a className="navbar-brand text-yellow-500 hover:text-yellow-500 font-bold text-2xl font-serif "><span className='text-white'>Port</span>folio</a>
                        <button className="navbar-toggler shadow-none border-0  " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                            <span className="cursor-pointer text-[25px] text-white"><FaBars /></span>
                        </button>
                        <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                            <div className="offcanvas-header  text-dark border-bottom p-[17px]">
                                <h5 className="offcanvas-title text-[20px] font-bold text-black font-serif" id="offcanvasNavbarLabel"><span>Mern-Stack</span> Developer</h5>
                                <button type="button" className="btn-close btn-close-dark shadow-none" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                            </div>



                            <div className="offcanvas-body bg-black lg:flex lg:justify-end lg:items-center ">
                                <div className="d-lg-none bg-black flex flex-col items-center  justify-center mb-4 ">
                                    <img src={deepak} alt="Loading" className='rounded-full h-[100px] w-[100px]' />
                                    <h3 className='text-white mt-3 font-bold text-xl font-serif'> Deepak kumar </h3>
                                </div>
                                <ul className="navbar-nav font-serif  ">
                                    <Link to='/'>
                                        <motion.li
                                            whileHover={{ rotate: "5deg", textDecoration: "underline", textDecorationColor: "red", textDecorationThickness: "3px" }}
                                            transition={{
                                                duration: .5,
                                                ease: "easeIn",
                                            }}
                                            className="nav-item flex items-center mx-1 lg:px-2 border-2 border-white cursor-pointer ">
                                            < FaHome className='d-lg-none text-green-600 mx-3' />

                                            <a className="nav-link font-bold tracking-wider lg:text-[17px] text-white" > Ho<span className='text-yellow-500 '>me</span> </a>
                                        </motion.li>
                                    </Link>


                                    <Link to='/about'>
                                        <motion.li
                                            whileHover={{ rotate: "5deg", textDecoration: "underline", textDecorationColor: "red", textDecorationThickness: "3px" }}
                                            transition={{
                                                duration: .4,
                                                ease: "easeIn",
                                            }}
                                            className="nav-item flex items-center mx-1 cursor-pointer  ">
                                            < FaHome className='d-lg-none text-green-600 mx-3' />

                                            <a className="nav-link font-bold tracking-wider lg:text-[17px] text-white " > Ab<span className='text-yellow-500 '>out</span> </a>
                                        </motion.li>
                                    </Link>


                                    <Link to='/skills'>
                                        <motion.li
                                            whileHover={{ rotate: "5deg", textDecoration: "underline", textDecorationColor: "red", textDecorationThickness: "3px" }}
                                            transition={{
                                                duration: .4,
                                                ease: "easeIn",
                                            }}
                                            className="nav-item flex items-center mx-1 cursor-pointer ">
                                            < FaHome className='d-lg-none text-green-600 mx-3' />

                                            <a className="nav-link font-bold tracking-wider lg:text-[17px] text-white" > Ski<span className='text-yellow-500 '>lls</span> </a>
                                        </motion.li>
                                    </Link>


                                    <Link to='/education'>
                                        <motion.li
                                            whileHover={{ rotate: "5deg", textDecoration: "underline", textDecorationColor: "red", textDecorationThickness: "3px" }}
                                            transition={{
                                                duration: .4,
                                                ease: "easeIn",
                                            }}
                                            className="nav-item flex items-center mx-1 cursor-pointer  ">
                                            < FaHome className='d-lg-none text-green-600 mx-3' />

                                            <a className="nav-link font-bold tracking-wider lg:text-[17px] text-white" > Quali<span className='text-yellow-500 '>fication</span> </a>
                                        </motion.li>
                                    </Link>

                                    <Link to='/project'>
                                        <motion.li
                                            whileHover={{ rotate: "5deg", textDecoration: "underline", textDecorationColor: "red", textDecorationThickness: "3px" }}
                                            transition={{
                                                duration: .4,
                                                ease: "easeIn",
                                            }}
                                            className="nav-item flex items-center mx-1  cursor-pointer">
                                            < FaHome className='d-lg-none text-green-600 mx-3' />

                                            <a className="nav-link font-bold tracking-wider lg:text-[17px] text-white" > Proj<span className='text-yellow-500 '>ect</span> </a>
                                        </motion.li>
                                    </Link>


                                    <Link to='/contact'>
                                        <motion.li
                                            whileHover={{ rotate: "5deg", textDecoration: "underline", textDecorationColor: "red", textDecorationThickness: "3px" }}
                                            transition={{
                                                duration: .4,
                                                ease: "easeIn",
                                            }}
                                            className="nav-item flex items-center mx-1 cursor-pointer ">
                                            < FaHome className='d-lg-none text-green-600 mx-3' />

                                            <a className="nav-link font-bold tracking-wider lg:text-[17px] text-white" > Cont<span className='text-yellow-500 '>act</span> </a>
                                        </motion.li>
                                    </Link>


                                </ul>
                                <div className=" d-lg-none text-white flex justify-center p-8 border-t-2 border-white mt-4">
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
                                    ><FaInstagram className='cursor-pointer text-sky-300 mx-2 text-xl' /></motion.span></Link>
                                </div>

                            </div>
                        </div>
                    </div>
                </nav>
                {/* <div className="p-3 sm:p-6">
                    <div className="flex justify-center text-left flex-col md:px-12 lg:mx-24">
                        <h3 className='text-white font-bold sm:text-4xl text-2xl'>hello <span className='text-green-500'> , </span> i m <span className='text-yellow-500'>Deepak kumar</span></h3>
                        <h4 className=' sm:text-3xl text-xl font-bold mt-3 text-green-500'>Mern Stack Developer</h4>
                        <p className='text-white mt-3 font-serif hidden lg:block'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas doloremque autem, sapiente rerum qui tempora veniam corrupti magnam saepe nihil illum temporibus fugit non odit atque assumenda distinctio placeat nisi aliquid impedit. Rem ipsum et libero nesciunt laudantium sed sit molestiae reprehenderit, aliquam delectus amet. Cumque, explicabo dignissimos tenetur maxime at numquam reiciendis architecto. Minus, ipsa commodi fugit enim magnam sit inventore hic. Expedita dolore porro harum! Est officia recusandae modi eveniet numquam facere officiis. Totam, at. Ex, sed saepe?</p>
                        <p className='text-white mt-3 font-serif lg:hidden'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas doloremque autem, sapiente rerum qui tempora veniam corrupti magnam saepe nihil illum temporibus fugit non odit atque assumenda distinctio placeat nisi aliquid impedit.</p>
                        <motion.button
                            whileHover={{ rotate: "2.5deg", background: "#20FFFF" }}
                            transition={{
                                duration: .7,
                                ease: "easeIn",
                            }}
                            className='text-black mt-3 h-10 w-32 font-bold tracking-wider cursor-pointer bg-yellow-500'>Resume</motion.button>
                        <div className=" text-white flex mb-4   mt-4">
                            <motion.span
                                whileHover={{ rotate: "360deg" }}
                                transition={{
                                    duration: 1,
                                    ease: "easeIn",
                                }}
                            ><FaGithub className='cursor-pointer text-white mx-2 text-xl' /></motion.span>
                            <motion.span
                                whileHover={{ rotate: "360deg" }}
                                transition={{
                                    duration: .7,
                                    ease: "easeIn",
                                }}
                            ><FaLinkedin className='cursor-pointer text-white mx-2 text-xl' /></motion.span>
                            <motion.span
                                whileHover={{ rotate: "360deg", }}
                                transition={{
                                    duration: .7,
                                    ease: "easeIn",
                                }}
                            ><FaInstagram className='cursor-pointer text-white mx-2 text-xl' /></motion.span>
                        </div>
                    </div>
                </div> */}

            </div>

        </>
    );
}

export default Nav;