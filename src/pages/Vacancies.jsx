import React, { useContext, useEffect } from 'react'
import Filter from '../components/Functional/Filter'
import { Outlet } from 'react-router-dom'
import JobItem from '../components/UI/JobItem'
import { nanoid } from 'nanoid'
import { DataContext } from '../context/DataContext'

function Vacancies() {


    const { data } = useContext(DataContext)
    useEffect(() => { console.log(data) }, [data])
    return (
        <div className='flex  w-[81.5%]'>
            <div className='w-1/2 border-r-2 relative pt-[60px]'>
                <Filter category={"Sayt"} />
                <div className='h-[91.3vh] overflow-y-auto '>
                    {Boolean(data.length) && data.map(item => <JobItem key={nanoid()}  {...item} />)}
                </div>
            </div>
            <div className='w-1/2 '>
                <Outlet />
                {/* <div>
                    dsds
                </div> */}
            </div>
        </div>
    )
}

export default Vacancies