
import React from 'react'
import {motion} from 'framer-motion'

const Togglebutton = ({setOpen}) => {
  return (
 
      <button className="w-[50px] h-[50px] fixed rounded-sm bg-transparent top-[18px] left-[29px] cursor-pointer z-50 " onClick={()=> setOpen((prev)=>!(prev))}>
      <svg width="23" height="23" viewBox="0 0 23 23">
       
        <motion.path strokeWidth="3" stroke='white' strokeLinecap='round' variants={{closed:{d: "M 2 2.5 L 20 2.5"},open:{ d:"M 3 16.5 L 17 2.5"},}}/>
        <motion.path strokeWidth="3" stroke='white' strokeLinecap='round' d="M 2 9.423 L 20 9.423" variants={{closed:{opacity: 1},open:{opacity:0},}}/>
        <motion.path strokeWidth="3" stroke='white' strokeLinecap='round'  variants={{closed:{d: "M 2 16.346 L 20 16.346"},open:{ d:"M 3 2.5 L 17 16.346"},}} />

      </svg>

      </button>
  )
}

export default Togglebutton
