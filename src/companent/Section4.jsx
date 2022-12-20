import React from 'react'
import './Section4.css'
import { BsPhoneFill } from 'react-icons/bs'
export default function Section4() {
    return (
        <div className='section4'>
            <div className='section40'>
                <h1 className='lets'>Let's Get In Touch!</h1>
                <h3 className='ready'>Ready to start your next project with us? Send us a messages and we will get back to you as soon as possible!</h3>
                <div className='input'>
                    <input placeholder='Full Name' />
                    <input placeholder='Email address' />
                    <input placeholder='Phone number' />
                    <input className='mesaj' placeholder='Message' />
                    <button className='SUBMIT'>SUBMIT</button>
                </div>
                <div>
                    <BsPhoneFill className='iconphone'/>
                    <h3 className='nomer'>+1 (555) 123-4567</h3>
                </div>
            </div>

        </div>
    )
}
