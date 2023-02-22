import React from 'react'

const Button = ({handleClick, text}) => (<button className='border border-white w-[7rem] h-[3rem] text-[1.2rem] font-[500]' onClick={handleClick}>{text}</button>)

export default Button