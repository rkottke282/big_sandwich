import React from 'react';
import DownArrow from '../images/down_arrow.svg';

export default function ScrollDownArrow() {
    return ( 
        <div className='h-screen relative'>
            <img src={DownArrow} alt="Scroll Down"
                className='animate-bounce absolute bottom-0 inset-x-1/2 opacity-70 w-40 h-40'/>
        </div>
    );
}