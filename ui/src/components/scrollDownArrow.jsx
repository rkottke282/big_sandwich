import React from 'react';
import DownArrow from '../images/down_arrow.svg';

export default function ScrollDownArrow() {
    return (
        <div className='flex animation-pulse opacity-70 w-40'>
            <div>
                <img src={DownArrow} alt="Scroll Down"/>
            </div>
        </div>
    );
}