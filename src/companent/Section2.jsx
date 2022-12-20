import React from 'react'
import './Section2.css'
import { ImEarth } from 'react-icons/im'

export default function Section2() {
    return (
        <div className='sec2'>
            <div className='sec21'>
                <div className='orange'>
                    <h1 className='h3'>We've got what you need!</h1>
                    <h1 className='h4'>Start Bootstrap has everything you need to get your new website up and running in no time! Choose one of our open source, free to download, and easy to use themes! No strings attached!</h1>
                    <button className='getbtn'>GET STARTED!</button>
                </div>
            </div >
            <div className='sec22'>
                <h2 className='at'>At Your Service</h2>
                <div className='icons'>
                    <div className='icon'>
                        <ImEarth className='earth' />
                        <h2 className='iconh2'>Sturdy Themes</h2>
                        <h3 className='iconh3'>Our themes are updated regularly to keep them bug free!</h3>
                    </div>
                    <div className='icon'>
                        <ImEarth className='earth' />
                        <h2 className='iconh2'>Sturdy Themes</h2>
                        <h3 className='iconh3'>Our themes are updated regularly to keep them bug free!</h3>
                    </div>
                    <div className='icon'>
                        <ImEarth className='earth' />
                        <h2 className='iconh2'>Sturdy Themes</h2>
                        <h3 className='iconh3'>Our themes are updated regularly to keep them bug free!</h3>
                    </div>
                    <div className='icon'>
                        <ImEarth className='earth' />
                        <h2 className='iconh2'>Sturdy Themes</h2>
                        <h3 className='iconh3'>Our themes are updated regularly to keep them bug free!</h3>
                    </div>
                </div>
            </div>
        </div>

    )
}
