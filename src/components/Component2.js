import React from 'react'
import './Component2.css'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

export const Component2 = () => {
  return (
    <div class='cnt'>
        <div className="icon">
            <button className='btn-1'><FaFacebookF /></button>
            <button className='btn-2'><FaTwitter /></button>
            <button className='btn-3'><FaLinkedinIn /></button>
        </div>
        <div class="study">
            <div id="content">
                <h1>Study to <br />become a global talent</h1>
                <p>Learn new tech skills using a world-class curriculum from top <br />industry experts in an accredited institution.</p>
                <button class='btn'>Start Now</button>
            </div>
            <div id="image">
                <img src="bg-header-sqi-1.png" alt="" />
            </div>
        </div>
        <div className="chat">
            <button className='btn-4'><FaWhatsapp /></button>
            <button className='btn-5'>Need Help? <b>Chat with us</b></button>
        </div>
    </div>
  )
}
export default Component2