import React from 'react'
import callbtn from "/call.png"
import "./callbtn.css"

const Callbtn = () => {
    return (
        <div className='callbtndiv w-[50px] h-[50px] fixed'>
            <a href='tel:+918882715717' target='_blank'><img className='w-[100%] h-[100%]' src={callbtn} alt="" /></a>
        </div>
    )
}

export default Callbtn;
