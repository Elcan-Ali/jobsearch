import React, { useEffect } from 'react'
import { TbCurrencyManat } from "react-icons/tb"
import { AiOutlineHeart } from "react-icons/ai"
import { VscEye } from "react-icons/vsc"
import { Link } from 'react-router-dom'

function JobItem({ attributes, id, relationships }) {
  // useEffect(()=>{console.log(attributes);},[])
  return (
    <Link to={`/vacancies/${id}`}>
      <div className='px-[16px] py-[8px] flex items-center border '>

        <div className='rounded-full mr-[12px] bg-red-500 flex justify-center text-[22px] items-center w-[36px] h-[36px]'>M</div>

        <div className='flex items-center w-full justify-between '>

          <div className='flex flex-col gap-[5px]'>
            <span className='text-[16px] line-clamp-1'>{attributes?.title}</span>
            <span>{relationships?.employer?.data?.name}</span>
          </div>

          <div className='flex text-[12px]  items-center'>
            <span className='px-[10px] border-r-[1px]'> <TbCurrencyManat size={18} /></span>
            <span className='px-[10px] border-r-[1px] flex items-center gap-[3px] '><VscEye size={18} /><span>257</span> </span>
            <span className='px-[10px] border-r-[1px] whitespace-nowrap'>04 May</span>
            <span className='px-[10px]'><AiOutlineHeart size={20} /></span>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default JobItem