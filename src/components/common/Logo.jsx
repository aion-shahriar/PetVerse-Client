import React from 'react';

import logoImg from '../../assets/pLogo.png';
import { Link } from 'react-router-dom';

const Logo = () => {
    return (
        <Link to ='/'>
            <div className='flex items-center gap-1'>
                <img src={logoImg} alt="Logo" className='w-6 h-6 object-contain' />
                <h3 className='text-lg font-bold'>PetVerse</h3>
            </div>
        </Link>
    );
};

export default Logo;