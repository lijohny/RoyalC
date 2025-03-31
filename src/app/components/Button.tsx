import React from 'react';

interface ButtonProps {
    text: string
    className: string
}

export default function Button( {text, className}: ButtonProps ) {
    return (
        <button className={`btn-66 px-7 lg:px-8 mt-5 lg:mt-8 font-bold text-xs relative ${className}`}>{text} <div className="bbi-button-flash"></div></button>
    )
}