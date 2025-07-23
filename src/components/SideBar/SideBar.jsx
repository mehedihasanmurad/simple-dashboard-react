import React from 'react';
import { LiaCreativeCommonsShare } from "react-icons/lia";
import { BiHomeSmile } from "react-icons/bi";
import { FaRegFolder } from "react-icons/fa";
import { IoDocumentOutline } from "react-icons/io5";
import { FiBarChart } from "react-icons/fi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoIosHelpCircleOutline } from "react-icons/io";


const SideBar = () => {
    return (
        <div className=''>
            <div className='flex items-center gap-5 py-5'>
                <LiaCreativeCommonsShare className='text-3xl bg-green-600 text-white p-1 rounded-full'></LiaCreativeCommonsShare>
                <h1 className='font-bold font-mono text-xl'>PORTAL</h1>
            </div>
            <div className='space-y-3 mb-10'>
                <div className='flex items-center gap-4 hover:underline'>
                    <BiHomeSmile className='text-2xl'></BiHomeSmile>
                    <h1 className='text-lg text-gray-500 font-mono'>Home</h1>
                </div>
                <div className='flex items-center gap-4 hover:underline'>
                    <FaRegFolder className='text-2xl'></FaRegFolder>
                    <h1 className='text-lg text-gray-500 font-mono'>Docs</h1>
                </div>
                <div className='flex items-center gap-4 hover:underline'>
                    <IoDocumentOutline className='text-2xl'></IoDocumentOutline>
                    <h1 className='text-lg text-gray-500 font-mono'>Pages</h1>
                </div>
                <div className='flex items-center gap-4 hover:underline'>
                    <FiBarChart className='text-2xl'></FiBarChart>
                    <h1 className='text-lg text-gray-500 font-mono'>Charts</h1>
                </div>
                <div className='flex items-center gap-4 hover:underline'>
                    <IoMdNotificationsOutline className='text-2xl'></IoMdNotificationsOutline>
                    <h1 className='text-lg text-gray-500 font-mono'>Notification</h1>
                </div>
                <div className='flex items-center gap-4 hover:underline'>
                    <IoIosHelpCircleOutline className='text-2xl'></IoIosHelpCircleOutline>
                    <h1 className='text-lg text-gray-500 font-mono'>Helps</h1>
                </div>
            </div>
        </div>
    );
};

export default SideBar;