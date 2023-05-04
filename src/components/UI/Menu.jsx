import React from 'react'
import Logo from "../../assets/img/logo.svg"
import Studio from "../../assets/img/jeyhun.svg"

import { Link, NavLink } from 'react-router-dom'
import { BsChevronDown, BsMoonFill } from "react-icons/bs"
import { IoBagSharp, IoHeartCircleSharp } from 'react-icons/io5'
import { MdCategory } from "react-icons/md"
import { HiSun } from "react-icons/hi"
import { BiBuildings } from "react-icons/bi"
import { FaIndustry } from "react-icons/fa"
import { SlEnvolopeLetter } from "react-icons/sl"
function Menu() {
    return (
        <div className='bg-[#262626] overflow-y-auto flex flex-col justify-between !w-[280px] border-r-[1px] border-[#515151] h-[100vh] p-[15px] '>
            <header >
                <div className='flex justify-between items-start mt-[9px] '>
                    <Link to="/" className='px-[18px]' >
                        <img className='w-[117px] h-[31px]' src={Logo} alt="logo-img" />
                    </Link>
                    <div className=" inline-block text-[12px] group cursor-pointer mb-[6px]  ">
                        <div className='flex gap-[5px]   rounded group-hover:rounded-none transition-all px-[6px] py-[4px] border border-[#515151] items-center'>
                            <span >AZ</span>
                            <BsChevronDown size={12} />
                        </div>
                        <div className='flex opacity-0 group-hover:opacity-100 transition-all flex-col border border-[#515151] px-[6px]'>
                            <span>EN</span>
                            <span>RU</span>
                        </div>
                    </div>
                </div>
                <div>
                    <ul className='flex flex-col gap-[5px] mb-[35px]  text-[14px] font-semibold'>
                        <li >
                            <NavLink to='/vacancies' className="menu-links flex items-center gap-[12px]  rounded py-[8px] px-[14px]">
                                <IoBagSharp size={22} />
                                <h3>Elanlar</h3>
                            </NavLink>
                        </li>
                        <li >
                            <NavLink to='/categories' className="menu-links flex items-center gap-[12px]  rounded py-[8px] px-[14px]">
                                <MdCategory size={22} />
                                <h3>Kateqoriyalar</h3>
                            </NavLink>
                        </li>
                        <li >
                            <NavLink to='/va' className="menu-links flex items-center gap-[12px]  rounded py-[8px] px-[14px]">
                                <FaIndustry size={22} />
                                <h3>Sənaye</h3>
                            </NavLink>
                        </li>
                        <li >
                            <NavLink to='/va' className="menu-links flex items-center gap-[12px]  rounded py-[8px] px-[14px]">
                                <BiBuildings size={22} />
                                <h3>Şirkətlər</h3>
                            </NavLink>
                        </li>
                    </ul>
                    <div className='font-semibold mb-[35px]'>
                        <h3 className='mb-[10px] text-[#ffffff80] '>Sizin JobSearch</h3>
                        <ul>
                            <li>
                                <NavLink to='/v' className="menu-links flex items-center gap-[12px]  mb-[5px] rounded py-[8px] px-[14px]">
                                    <IoHeartCircleSharp size={22} />
                                    <div className='flex items-center gap-2'>
                                        <h3>Seçilmiş elanlar</h3>
                                        <span className='bg-red-500 text-[10px] flex items-center justify-center rounded-full w-[15px] h-[15px] '>0</span>  </div>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/vacanc' className="menu-links flex items-center gap-[12px] mb-[5px]  rounded py-[8px] px-[14px]">
                                    <SlEnvolopeLetter size={18} />
                                    <h3>Abunə - kateqoriyalar</h3>
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className='inline-block bg-[#484848] rounded-md mt-[3px]  '>
                        <div className='flex items-center gap-[5px] py-[2px] px-[1px]  '>
                            <div className=' flex items-center justify-center w-[30px] h-[30px] rounded-md '><HiSun size={18} /></div>
                            <div className=' flex items-center justify-center w-[30px] h-[30px] rounded-md bg-white'><BsMoonFill fill='#000' /></div>
                        </div>
                    </div>
                </div>
            </header>

            <footer className='mt-[20px] font-bold  text-[12px] text-[#898F93]'>
                <ul className='flex gap-[20px] mb-[10px] '>
                    <span>Haqqımızda</span>
                    <span>Xidmətlər</span>
                    <span>Əlaqə</span>
                </ul>
                <p className='text-[#686865]'>© JobSearch.az 2006—2023</p>

                <p className='pt-[14px] text-[#686865] mt-[11px] pb-[3px]'>Site by <img className='inline-block mx-[5px]' src={Studio} alt="studio" /> Jeykhun Imanov Studio</p>
            </footer>
        </div>
    )
}

export default Menu