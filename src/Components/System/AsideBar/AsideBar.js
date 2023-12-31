import React, { useContext, useEffect, useState } from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import "./AsideBar.css"
import { Link } from 'react-router-dom';
import Image from '../../Image';

import { FaBars } from "react-icons/fa6";
import { SideBarProvider } from '../../../Context/SideBarProvider';

const AsideBar = () => {
    const [rtl, setRtl] = useState(true)
    // setting the width of the screen
    const [width, setWidth] = useState(window.innerWidth)
    const { collapsed, setCollapsed } = useContext(SideBarProvider);

    function getSize() {
        setWidth(window.innerWidth)
    }

    useEffect(() => {
        // if user start to resize the screen call getsize function
        window.addEventListener('resize', getSize)
        // if you use screens from tablet collapse the sidebar
        if (width < 1025 ) {
            setCollapsed(true)
            console.log("closed due to small width")
        } else {
            setCollapsed(false)
            console.log("opend due to small width")

        }
        console.log(window.innerWidth)
        // clear the use Effect
        return () => {
            window.removeEventListener('resize', getSize)
        }
    }, [window.innerWidth])

    return (
        <div className={` asidePar d-flex align-items-center  w-100   `} style={{ direction: rtl ? 'rtl' : 'ltr' }}>

            <Sidebar

                transitionDuration={800}
                collapsedWidth="100px !important"
                rootStyles={{
                    color: "#FFF",
                    height: '897px',
                    border: "2px solid #EFAA20 !important"
                }}

                collapsed={collapsed} rtl={rtl} backgroundColor='#1E1E2D' className='  w-100' color='#FFF'>

                <div className='d-flex collapsed-handler mx-2 mt-2 justify-end'>


                    <FaBars
                        color='#FFF'
                        size={20}
                        className="pointer"
                        onClick={() => setCollapsed(!collapsed)}

                    />

                </div>
                <Menu
                    transitionDuration={200}
                    className='w-100'>

                    <MenuItem className='mt-4  center w-100'>

                        <div className='d-flex justify-content-center flex-column align-items-center'>
                            <div>  <Image src={process.env.PUBLIC_URL + "/Badr.png"} alt="icon" className='user-icon' /></div>


                            <div className='hidden-collapsed '>
                                <p style={{ fontSize: "19px" }} className=' p-0 mx-0  my-2'>بدر بن سليمان</p>
                                <p className='golden-text ' >رئيس مجلس الأدارة</p>
                                <p style={{ fontSize: "14px", color: "#565674" }}>badr@bsa.com</p>
                            </div>


                        </div>




                    </MenuItem>


                    <MenuItem className='my-2 hidden-collapsed  d-flex flex-column '>






                        <div className=' goals    '><p>الاهداف</p>
                            <ProgressBar className='w-100   ' variant='warning' now={37} />
                            <p style={{ fontSize: "14px" }} className='my-2'>وصلت إلى 37% من هدفك</p>


                            <div className='d-flex justify-content-center gap-3'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="134" height="66" viewBox="0 0 134 66" fill="none">
                                    <rect x="0.5" y="0.5" width="133" height="65" rx="10.5" stroke="#434362" stroke-linejoin="round" stroke-dasharray="3 3" />
                                    <text fill="white   ">
                                        <tspan fill='rgba(255, 255, 255, 0.50)' x="100" y={20} fontSize={"12"} dy="0">مشاريع منتهية
                                        </tspan>
                                        <tspan x="90" fill='#75CC68' y={50} fontSize={"20"} className='text-center ' dy="0"> 30 %
                                        </tspan>

                                    </text>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="134" height="66" viewBox="0 0 134 66" fill="none">
                                    <rect x="0.5" y="0.5" width="133" height="65" rx="10.5" stroke="#434362" stroke-linejoin="round" stroke-dasharray="3 3" />
                                    <text fill="white   ">
                                        <tspan fill='rgba(255, 255, 255, 0.50)' x="110" y={20} fontSize={"12"} dy="0"> مشاريع قيد التنفيذ
                                        </tspan>
                                        <tspan x="90" fill='#F1416C' y={50} fontSize={"20"} className='text-center ' dy="0"> 70 %
                                        </tspan>

                                    </text>
                                </svg>

                            </div>
                        </div>

                    </MenuItem>
                    <MenuItem className='my-2  w-100'>
                        <div className='row  system-card-container'>
                            <div className='col-md-4 '>

                                <div className='system-item'>
                                    <Link to="/System/index">
                                        <div class="system-card">
                                            <div class="card__content d-flex justify-content-center align-items-center  flex-column  " >
                                                <Image src={process.env.PUBLIC_URL + "/icons/asideIcons/Main.png"} alt="icon" className='aside-icon mt-3'
                                                />

                                                <p>الرئيسية</p>
                                            </div>

                                        </div>
                                    </Link>

                                </div>

                            </div>
                            <div className='col-md-4 '>

                                <div className='system-item'>
                                    <Link to={"/System/Clients/index"}>
                                        <div class="system-card">
                                            <div class="card__content d-flex justify-content-center align-items-center  flex-column  " >
                                                <Image
                                                    src={process.env.PUBLIC_URL + "/icons/asideIcons/Customers.png"}
                                                    alt="icon" className='aside-icon mt-3'
                                                />
                                                <p>العملاء</p>
                                            </div>

                                        </div>
                                    </Link>

                                </div>

                            </div>
                            <div className='col-md-4 '>

                                <div className='system-item'>
                                    <Link to="/System/Users/index">
                                        <div class="system-card">
                                            <div class="card__content d-flex justify-content-center align-items-center  flex-column  " >
                                                <Image
                                                    src={process.env.PUBLIC_URL + "/icons/asideIcons/users.png"}

                                                    alt="icon" className='aside-icon mt-3'
                                                />
                                                <p>المستخدمين</p>
                                            </div>

                                        </div>
                                    </Link>

                                </div>

                            </div>
                            <div className='col-md-4 '>

                                <div className='system-item'>
                                    <Link to="/System/Requests/index">
                                        <div class="system-card">
                                            <div class="card__content d-flex justify-content-center align-items-center  flex-column  " >
                                                <Image
                                                    src={process.env.PUBLIC_URL + "/icons/asideIcons/orders.png"}

                                                    alt="icon" className='aside-icon mt-3'
                                                />
                                                <p>الطلبات</p>
                                            </div>

                                        </div>
                                    </Link>

                                </div>

                            </div>   <div className='col-md-4 '>

                                <div className='system-item'>
                                    <Link to={"/System/Projects/index"}>
                                        <div class="system-card">
                                            <div class="card__content d-flex justify-content-center align-items-center  flex-column  " >
                                                <Image
                                                    src={process.env.PUBLIC_URL + "/icons/asideIcons/projects.png"}

                                                    alt="icon" className='aside-icon mt-3'
                                                />
                                                <p>المشاريع</p>
                                            </div>

                                        </div>
                                    </Link>

                                </div>

                            </div>   <div className='col-md-4 '>

                                <div className='system-item'>
                                    <Link>
                                        <div class="system-card">
                                            <div class="card__content d-flex justify-content-center align-items-center  flex-column  " >
                                                <Image
                                                    src={process.env.PUBLIC_URL + "/icons/asideIcons/tasks.png"}

                                                    alt="icon" className='aside-icon mt-3'
                                                />
                                                <p>المهام</p>
                                            </div>

                                        </div>
                                    </Link>

                                </div>

                            </div>
                            <div className='col-md-4 '>

                                <div className='system-item'>
                                    <Link to={"/System/Meetings/index"}>
                                        <div class="system-card">
                                            <div class="card__content d-flex justify-content-center align-items-center  flex-column  " >
                                                <Image
                                                    src={process.env.PUBLIC_URL + "/icons/asideIcons/meetings.png"}
                                                    alt="icon" className='aside-icon mt-3'
                                                />
                                                <p>الاجتماعات</p>
                                            </div>

                                        </div>
                                    </Link>

                                </div>

                            </div>

                            <div className='col-md-4 '>

                                <div className='system-item'>
                                    <Link to={"/System/Hr/index"}>
                                        <div class="system-card">
                                            <div class="card__content d-flex justify-content-center align-items-center  flex-column  " >
                                                <Image
                                                    src={process.env.PUBLIC_URL + "/icons/asideIcons/hr.png"}

                                                    alt="icon" className='aside-icon mt-3'
                                                />
                                                <p >الموارد البشرية  </p>
                                            </div>

                                        </div>
                                    </Link>

                                </div>

                            </div>

                            <div className='col-md-4 '>

                                <div className='system-item'>
                                    <Link to={"/System/Accounating/index"}>
                                        <div class="system-card">
                                            <div class="card__content d-flex justify-content-center align-items-center  flex-column  " >
                                                <Image
                                                    src={process.env.PUBLIC_URL + "/icons/asideIcons/Acouuntaing.png"}

                                                    alt="icon" className='aside-icon mt-3'
                                                />
                                                <p>الحسابات </p>
                                            </div>

                                        </div>
                                    </Link>

                                </div>

                            </div>
                            <div className='col-md-4 '>

                                <div className='system-item'>
                                    <Link>
                                        <div class="system-card">
                                            <div class="card__content d-flex justify-content-center align-items-center  flex-column  " >
                                                <Image
                                                    src={process.env.PUBLIC_URL + "/icons/asideIcons/Conversation.png"}

                                                    alt="icon" className='aside-icon mt-3'
                                                />
                                                <p>محادثاتى</p>
                                            </div>

                                        </div>
                                    </Link>

                                </div>

                            </div>

                            <div className='col-md-4 '>

                                <div className='system-item'>
                                    <Link>
                                        <div class="system-card">
                                            <div class="card__content d-flex justify-content-center align-items-center  flex-column  " >
                                                <Image
                                                    src={process.env.PUBLIC_URL + "/icons/asideIcons/settings.png"}
                                                    alt="icon" className='aside-icon mt-3'
                                                />
                                                <p style={{ fontSize: "14px" }}>الاعدادات  </p>
                                            </div>

                                        </div>
                                    </Link>

                                </div>

                            </div>

                            <div className='col-md-4 '>

                                <div className='system-item'>
                                    <Link>
                                        <div class="system-card">
                                            <div class="card__content d-flex justify-content-center align-items-center  flex-column  " >
                                                <Image

                                                    src={process.env.PUBLIC_URL + "/icons/asideIcons/exit.png"}

                                                    alt="icon" className='aside-icon mt-3'
                                                />
                                                <p>خروج </p>
                                            </div>

                                        </div>
                                    </Link>

                                </div>

                            </div>



                        </div>

                    </MenuItem>
                </Menu>
            </Sidebar>





        </div>
    )
}

export default AsideBar