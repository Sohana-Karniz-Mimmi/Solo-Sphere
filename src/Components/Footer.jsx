import { MdEmail } from "react-icons/md";
import { IoCall, IoLocationOutline } from "react-icons/io5";
import {  FaGithub, FaLinkedin } from "react-icons/fa";
import { FaSquareFacebook, FaSquareTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
// import logo from "../assets/images/logo/logo2.png"

const Footer = () => {
    return (
        <footer className="bg-[#131318]">

            <div className="container mx-auto md:pt-24 pt-12 md:pb-4 flex flex-col lg:flex-row lg:justify-between lg:items-start items-center gap-10 max-w-6xl">

                {/* <!-- item1 --> */}
                <div className=" md:w-[300px] lg:text-start text-center">
                    <h3 className="text-white font-bold text-lg">
                        <Link to={'/'} className="font-bold text-2xl gap-3 flex items-center"> 
                        {/* <img className="w-12 h-10 relative" src={logo} alt="" /> */}
                        <span className="">Car</span></Link>
                    </h3>
                    <p className="text-[#FFFFFF99] mt-4 pb-6">Discover your next adventure with Turio. Explore breathtaking destinations, find hidden gems, and create unforgettable memories. Your journey starts here. </p>

                </div>


                {/* <!-- item2 --> */}

                <div className="">
                    <h2 className="text-white lg:text-start text-center font-bold text-lg mb-2">CONTACT</h2>
                    <div className="flex flex-col space-y-4 text-[#FFFFFF99] text-sm">


                        <div className="flex items-center gap-1 mt-4 cursor-pointer">
                            <IoCall className="text-xl" />
                            <span className="text-[#FFFFFFCC] ml-4">(+62) 123-321-543</span>
                        </div>
                        <div className="flex items-center gap-1 cursor-pointer">
                            <MdEmail className="text-xl" />
                            <span className=" text-[#FFFFFFCC] ml-4">sohanasheikh81@gmail.com</span>
                        </div>

                        
                        <div className="flex items-center gap-1 mt-4 cursor-pointer">
                            <IoLocationOutline className="text-xl" />
                            <span className="text-[#FFFFFFCC] ml-4">
                                168/170, Avenue 01  <br />
                                Mirpur DOHS, Bangladesh</span>
                        </div>
                    </div>
                </div>

                {/* <!-- item3 --> */}

                <div className="">
                    <h2 className="text-white font-bold text-lg mb-2">QUICK LINKS</h2>
                    <div className="flex flex-col lg:text-start text-center space-y-4 text-[#FFFFFF99] text-sm">
                        <Link className="no-underline hover:underline cursor-pointer">Tour Guide</Link>

                        <Link className="no-underline cursor-pointer hover:underline">Contact Us</Link>
                        <Link to={`/`} className="no-underline cursor-pointer hover:underline">Support Center</Link>
                        <Link to={`/`} className="no-underline cursor-pointer hover:underline">Terms Conditions</Link>



                    </div>
                </div>


                {/* <!-- item4 --> */}
                <div className="">
                    <h2 className="text-white font-bold text-lg mb-7">SOCIAL LINKS:</h2>
                    <div className="flex flex-col space-y-4 text-[#FFFFFF99] text-sm">
                        <div className="bg-[#1313180C] rounded-2xl flex justify-center items-center">
                            <div className="space-x-2 text-3xl flex">
                                <Link><FaSquareTwitter className="transition-all duration-300 hover:text-green-600" /></Link>
                                <Link>
                                    <FaSquareFacebook className="transition-all duration-300 hover:text-green-600" />
                                </Link>
                                <Link>
                                    <FaLinkedin className="transition-all duration-300 hover:text-green-600" />
                                </Link>
                                <Link>
                                    <FaGithub className="transition-all duration-300 hover:text-green-600 " />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="footer footer-center text-gray-200 p-4 text-base-content">
                <aside>
                    <p>Copyright © 2024 - All right reserved by Turio Company Ltd</p>
                </aside>
            </div>
        </footer>
    );
};

export default Footer;