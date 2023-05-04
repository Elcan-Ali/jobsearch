import React from 'react'
import { IoSearchOutline } from "react-icons/io5"
import { MdFilterAlt } from "react-icons/md"

function Filter({ category }) {
  return (
    <div className='px-[18px]  py-[15px] border-b-[1px] border-[#7f7f7f] absolute top-0 w-full  flex items-center'>
      <input className='bg-[#262626] w-full outline-0 font-semibold'   placeholder={`${category} üzrə axtarış`} type="text" />
      <div className='flex items-center    '>
        <div className='px-[13px]'><IoSearchOutline color='#7f7f7f' size={20} /></div>
        <div className='flex gap-[8px] pl-[12px] py-[4px]  items-center border-l-[1px] border-[#7f7f7f]'>
          <MdFilterAlt size={16} />
          <span>Filterlər</span>
        </div>
      </div>
    </div>
  )
}

export default Filter