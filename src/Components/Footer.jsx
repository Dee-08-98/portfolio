import React from 'react';
import { FaCopyright, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { Link } from 'react-router-dom';
function Footer(props) {
    return (
        <>
            <div className="container-fluid font-serif  bg-gray-200">
                <div className="row">
                    <div className="  pt-8 pb-8 text-center flex justify-center items-center">
                        <div className='border-b-2 border-black w-40 '></div>
                        <h2 className='text-2xl md:text-3xl lg:text-3xl  font-bold text-black mx-2'>Port<span className='text-yellow-700'>folio</span></h2>
                        <div className='border-b-2 border-black w-40 '></div>
                    </div>
                    <div className="col-lg-4 col-md-4 lg:p-3 md:p-3 sm:pl-8 pl-3    flex justify-start  lg:justify-evenly">
                        <div className="py-3 px-2">
                            <h2 className=' mt-2 text-xl font-bold text-black'>Deepak <span className='text-yellow-700'>kumar</span></h2>
                            <h2 className=' mt-1 text-xl font-bold text-blue-800'>Mern-Stack <span>Developer</span></h2>

                            <div className=" mt-2 flex text-xl text-yellow-700">
                                <span  ><Link to='https://www.linkedin.com/in/deepak0898'><FaLinkedin /></Link></span>
                                <span className='mx-3'><Link to='https://github.com/Dee-08-98'><FaGithub /></Link></span>
                                <span className=''><Link to='https://www.instagram.com/kingdeepakkr/?next=%2F'><FaInstagram /></Link></span>
                            </div>

                        </div>
                    </div>

                    <div className="col-lg-4 col-md-4  lg:p-3 md:p-3 sm:pl-8 pl-3  flex sm:justify-start md:justify-evenly lg:justify-evenly">
                        <div className="py-3 px-2">
                            <h3 className='text-xl md:text-2xl lg:text-2xl font-bold text-black'> Links </h3>
                            <div className=" pt-2 flex flex-col text-black font-medium underline">
                                <h4 className='mt-2'><Link to='/'><span> Home </span></Link></h4>
                                <h4 className='mt-2'><Link to='/about'><span> About </span></Link></h4>
                                <h4 className='mt-2'><Link to='/skills'><span> Skills </span></Link></h4>
                                <h4 className='mt-2'><Link to='/education'><span> Qualification </span></Link></h4>
                                <h4 className='mt-2'><Link to='/project'><span> Project </span></Link></h4>
                                <h4 className='mt-2'><Link to='/contact'><span> Contact </span></Link></h4>
                            </div>

                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4  lg:p-3 md:p-3 sm:pl-8 pl-3  flex justify-start  lg:justify-evenly">
                        <div className="py-3 px-2 ">
                            <h3 className='text-xl md:text-2xl lg:text-2xl font-bold text-black'> Contact </h3>
                            <div className="pt-3 font-bold text-black">
                                <h3>Email :- <mark className='font-light'>dkkr30907@gmail.com</mark></h3>
                                <h3 className='mt-2'>Phone :- <mark className='font-light'>+91 8709345623</mark></h3>
                                <address className='mt-2'> Address :-  <span className='font-light'>Vinay-Nagar , Faridabad , Hariyana , 121013 </span> </address>
                            </div>

                        </div>
                    </div>

                    <div className='lg:pt-5 pt-3 pb-5 text-center  text-black'>
                        <h3 className='text-[18px] font-semibold'>Designed <span className='text-green-700'>&</span>  Developed BY :- <span className='text-yellow-700 '> Deepak Kumar </span> </h3>
                    </div>

                </div>
            </div>
        </>
    );
}

export default Footer;