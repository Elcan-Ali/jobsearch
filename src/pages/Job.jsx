import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { DataContext } from '../context/DataContext';
import { TbCurrencyManat } from "react-icons/tb"
import { AiOutlineHeart } from "react-icons/ai"
import { VscEye } from "react-icons/vsc"

function Job() {
  const { job } = useParams()
  const { data } = useContext(DataContext)
  const findData = data.find(item => item.id.toString() === job)

  return (
    <div className='p-[15px] h-[100vh] overflow-y-auto  '>
      <div className='flex justify-between'>
        <div className='flex items-center'>
          <div className='rounded-full mr-[12px] bg-red-500 flex justify-center text-[22px] items-center w-[36px] h-[36px]'>M</div>
          <h3>{findData?.attributes?.title}</h3>
        </div>
        <div className='flex text-[12px]  items-center'>
          <span className='px-[10px] border-r-[1px]'> <TbCurrencyManat size={18} /></span>
          <span className='px-[10px] border-r-[1px] flex items-center gap-[3px] '><VscEye size={18} /><span>257</span> </span>
          <span className='px-[10px] border-r-[1px] whitespace-nowrap'>04 May</span>
          <span className='px-[10px]'><AiOutlineHeart size={20} /></span>
        </div>
      </div>

      <div className='mt-[40px]' dangerouslySetInnerHTML={{ __html: findData?.attributes?.description }} />



    </div>
  )
}

export default Job