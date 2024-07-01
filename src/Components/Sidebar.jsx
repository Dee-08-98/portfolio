import React from 'react';
import deepak from '../assets/deepak.jpg'
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa'
import { FaBars, FaHome, FaPhone, FaThList, FaUserAlt, FaSearch, FaStore, FaCartPlus, FaUser, FaDyalog, FaRegistered } from 'react-icons/fa'
import { NavLink } from 'react-router-dom';
const routes = [
    {
        path: "/",
        name: "Home",
        icon: <FaHome />
    },
    {
        path: "/about",
        name: "About",
        icon: <FaThList />
    },
    {
        path: "/education",
        name: "Education",
        icon: <FaUserAlt />
    },
    {
        path: "/projects",
        name: "Projects",
        icon: <FaPhone />
    },
    {
        // path: "/projects",
        name: "Resume",
        icon: <FaPhone />
    }



]

function Sidebar({ children }) {
    return (
        <>
            <div className="">
                <div className="  hidden lg:flex  overflow-y-scroll  bg-slate-300 ">

                    <div className="sidebar h-screen   bg-slate-900 w-[18%]  border-r-2 border-white ">

                        <div className="one  flex  items-center flex-col mt-6 ">
                            <div className="image">
                                <img src={deepak} alt="Loading..." className='rounded-full h-[150px] w-[150px]' />
                            </div>
                            <div className="designation text-white p-4 text-xl font-bold tracking-wider ">
                                <h4 className='text-yellow-600'> Mern-Stack Developer</h4>
                            </div>
                            <div className="designation text-white flex justify-center items-center space-x-5 cursor-pointer text-[20px]">
                                <FaLinkedin />
                                <FaGithub />
                                <FaInstagram />
                            </div>

                        </div>
                        <div className="two">
                            <div className='border-b-2 border-white mb-5 mt-10  '></div>

                            {
                                routes.map((route, index) => {
                                    return <NavLink className=' ' to={route.path} key={route.name}>
                                        <div className="  flex items-center  space-x-5 p-3">
                                            <div className="text-white ">{route.icon}</div>
                                            <div className=" text-yellow-500 font-bold ">{route.name}</div>
                                        </div>
                                    </NavLink>
                                })
                            }

                        </div>
                    </div>
                    <div className="content  p-[50px] overflow-y-scroll h-screen w-[82%]">

                        <main >{children}</main>

                    </div>
                </div>
                <div className=" lg:hidden">
                    <nav className=" navbar navbar-expand-lg sticky-top  bg-body-tertiary">
                        <div className="container">

                            <a className="navbar-brand " ><span>Food</span>ies

                            </a>
                            <button className="navbar-toggler shadow-none border-0 text-light" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon "></span>
                            </button>

                            <div className="offcanvas offcanvas-start" id="offcanvasNavbar" aria-labelledby="offnavlabel">
                                <div className="offcanvas-header text-dark border-bottom">
                                    <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Food<span>ies</span></h5>
                                    <button type="button" className="btn-close btn-close-dark shadow-none" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                </div>

                                <div className="offcanvas-body">
                                    <ul className="navbar-nav justify-content-center align-items-center  flex-grow-1 pe-3">
                                        <Link to='/'><li className="nav-item">
                                            <a className="nav-link active" aria-current="page" >Home</a>
                                        </li></Link>
                                        <Link to='/menu'> <li className="nav-item">
                                            <a className="nav-link mx-2" >Menu</a>
                                        </li></Link>
                                        <Link to='/about'> <li className="nav-item">
                                            <a className="nav-link mx-2" >About</a>
                                        </li></Link>
                                        <Link to='/contact'>
                                            <li className="nav-item">
                                                <a className="nav-link mx-2">Contact</a>
                                            </li>
                                        </Link>
                                        <Link to='/cart'>
                                            <li className="nav-item">
                                                <a className="nav-link mx-2">Cart</a>
                                            </li>
                                        </Link>
                                        <Link to='/gallery'>
                                            <li className="nav-item">
                                                <a className="nav-link mx-2">Gallery</a>
                                            </li>
                                        </Link>

                                    </ul>
                                    <hr className='d-lg-none' />

                                    <div className='d-flex justify-content-center align-items-center gap-3'>
                                        <Link to='/login'><a className='text-black' id='login' >Logout</a></Link>

                                    </div>
                                </div>
                            </div>
                        </div>

                    </nav>
                    <main>{children}</main>
                </div>
               
            </div>
        </>
    );
}

export default Sidebar;