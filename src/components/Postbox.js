import React, { useState } from 'react'
import pinIcon from './Icon/pin.svg'
import PostTag from './posttag'
import commentIcon from './Icon/comment.svg'
import heartIcon from './Icon/heart.svg'
import { Link, Route, Router } from 'react-router-dom'
const Postbox =() => {
  const [isVilified,setIsVilified] =useState(false)
  return (
    <div className='Postbox'>
      <span className='Title'>Postsamplewdfewgewrewgggggg</span>
      <img src={pinIcon} alt='pin' className='bookmark'/>
      
      <hr/>
        <PostTag TagName={'โพสต์ล่าสุด'}/>
        <PostTag TagName={'โพสต์ล่าสุด'}/>
        <br/>
        <p className='detail'>
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        </p>
      
      <span className='date'>when</span>
      {isVilified?<></>:<></>}
      <span className='CLV'>
        <img src={commentIcon} alt='comment' className='comment'/>
        <span className='text'>10</span>
        <img src={heartIcon} alt='heart' className='heart'/>
        <span className='text'>10</span>
        <Link to="/Post" className='viewButton'>View</Link>
            

      </span>
    </div>
  ) 
}

export default Postbox