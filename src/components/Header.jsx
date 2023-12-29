import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='bg-slate-300 p-4'>
            <div className='max-w-[85%] mx-auto flex justify-between items-center'>
            <div>
                <h1 className='font-bold text-3xl'>User Auth</h1>
            </div>
            <div>
                <ul className='font-semibold text-xl flex gap-5'>
                   <Link to={"/"}>
                   <li>Home</li>
                   </Link>
                    <Link to={"/about"}>
                    <li>About</li>
                    </Link>
                    <Link to={"/signIn"}>
                    <li>Sign In</li>
                    </Link>
                </ul>
            </div>
            </div>
        </div>
    );
};

export default Header;