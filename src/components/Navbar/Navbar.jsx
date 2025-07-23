import React, { useState } from 'react';
import { IoMenu } from 'react-icons/io5';
import { CiSearch } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";
import Link from '../Link/Link';

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const routes = [
        { id: 1, name: "Home", path: "/home" },
        { id: 2, name: "About", path: "/about" },
        { id: 3, name: "Services", path: "/services" },
        { id: 4, name: "Contact", path: "/contact" },
        { id: 5, name: "Dashboard", path: "/dashboard" }
    ];

    return (
        <div className='py-4'>
            <div className='flex justify-between items-center'>
                <h1 className='text-2xl font-mono font-semibold'>Dashboard User</h1>
                <div className='flex items-center border border-slate-300 px-5 py-3 rounded-lg'>
                    <input className='w-96 outline-none' type="text" placeholder='Search' />
                    <CiSearch className='text-2xl'></CiSearch>
                </div>
                <div onClick={() => setOpen(!open)}>
                    {
                        open ? <RxCross2 className='text-3xl'></RxCross2> : <IoMenu className='text-3xl'></IoMenu>
                    }
                </div>
            </div>
            <ul className=''>
                <div className={`bg-blue-400 w-96 absolute ${open ? "top-10" : "-top-70"} duration-1000 space-y-3 py-3 rounded-lg text-center`}>
                    {
                        routes.map(route => <Link key={route.id} route={route}></Link>)
                    }
                    
                </div>
            </ul>
        </div>
    );
};

export default Navbar;