
import React from 'react'
import './Profile.css'
const ProfileButton = ({Detail,Img})=>{
    return (
        <div className='profilebutton'>
            <div className='content'>
            <img src={Img} className='profilebuttonImg'/>
            <div className='text'>
                {Detail}
            </div>
            </div>
        </div>
    )
}
export default ProfileButton;