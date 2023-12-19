import React, { useState } from 'react'

import "./index.css"
import { Outlet } from 'react-router-dom'
import { Container } from 'react-bootstrap'

import { IoMdNotifications } from "react-icons/io"
import { LuMessagesSquare } from "react-icons/lu"
import AsideBar from '../../../Components/System/AsideBar/AsideBar'
import Image from '../../../Components/Image'
const SystemIndex = () => {


    return (

        <section className='full-system  system-bg position-relative'>
            <div className='  d-flex  position-absolute  end-5'>

                <Image src={process.env.PUBLIC_URL + "/icons/systemlogo.png"} alt='BSA logo' className='system-logo text-white' />
            </div>


            <div className='system-container d-flex align-items-center     '>

                <AsideBar />
                <div className='row w-100 mx-auto  py-5 my-3 ps-5 h-75  align-items-center'>


                    <div className='col-md-12  '>
                        <Outlet />

                    </div>
                </div>
            </div>
        </section>


    )
}

export default SystemIndex