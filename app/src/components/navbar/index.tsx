import * as React from 'react';
import { useState, useEffect } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx'
import logo from '@/assets/logo.png'
import Link from './Link';

type Props = {
    selectPage:string,
    setSelectPage:(value:string) => void
}

function Navbar({selectPage,setSelectPage}: Props) {
  return (
    <div className=' flex items-center justify-between fixed top-0 w-full z-30 py-3'>
        <div className='flex items-center justify-between w-5/6 mx-auto'>   
            <div className='flex items-center justify-between w-full gap-16 sm:max-w-[90px] w-[200px}'>
                <img src={logo}/>
            </div>
            <div className='flex items-center justify-between w-full'>
                <div className='flex items-center justify-between gap-10 text-sm'>
                    <ul className='list-none flex justify-between items-center gap-10'>
                        <Link 
                        page='Home'
                        selectPage={selectPage}
                        setSelectPage={setSelectPage}
                        />
                        <Link 
                        page='Classes'
                        selectPage={selectPage}
                        setSelectPage={setSelectPage}
                        />
                        <Link 
                        page='Services'
                        selectPage={selectPage}
                        setSelectPage={setSelectPage}
                        />
                        <Link 
                        page='Contact us'
                        selectPage={selectPage}
                        setSelectPage={setSelectPage}
                        />
                    </ul>
                </div>
                <div className='flex items-center justify-between gap-8'>
                    <p>Sign in</p>
                    <button>Become a member</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar