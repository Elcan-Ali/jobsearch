import React from 'react'
import Menu from '../components/UI/Menu'
import { Outlet } from 'react-router-dom'
import DataContextProvider from '../context/DataContext'

function MainLayout() {
    return (
        <div className='flex'>
            <Menu />
            <DataContextProvider>
                <Outlet />
            </DataContextProvider>
        </div>
    )
}

export default MainLayout