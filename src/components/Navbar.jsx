import React from 'react';
import '../styles/components/Navbar.css';
import { toast } from 'react-toastify';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';

const Navbar = () => {
    const logout = async() => {
        toast.success('Logged out successfully');
        await signOut(auth);
        setTimeout(()=> {
            window.location = '/';
        }, 5000);
    }
    return (
        <div className='navbar'>
        <div className='navbar left'>FireBase</div>
        <div onClick={logout} className='navbar right'>Logout</div>
        </div>
    );
}

export default Navbar;