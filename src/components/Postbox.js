import React, { useEffect, useState } from 'react'
import pinIcon from './Icon/pin.svg'
import PostTag from './posttag'
import commentIcon from './Icon/comment.svg'
import heartIcon from './Icon/heart.svg'
import verifyIcon from './Icon/verify.svg'
import { Link, Route, Router } from 'react-router-dom'
const Postbox =(props) => {
  const [Tags,setTag] = useState([])
  const [isVilified,setIsVilified] =useState(false)
  const [PID,setPID] = useState(null);
 useEffect(()=>{
   setPID(props.PID)
 },[])


  return (
    <div className='Postbox'>
      <span className='Title'>{props.title}</span>
      <span className='top'><img src={pinIcon} alt='pin' className='bookmark'/></span>
      <p className='date'>{props.date} by {props.displayname}</p>
      <hr/>
        {
          props.taglist.map((Tag,i)=>{
            return <PostTag TagName={Tag} key={i}/>
          })
        } 
        <br/>
        <p className='detail'>
        {props.detail}
        </p>
        <div className='transparent'></div>
        <br/>
      
      <span className='CLV'>
      {
          props.isVerify=== "1"?<span className='text'><img src={verifyIcon} alt='verify' className='verify'/>Answer Vilified</span> :<></>
        }
        <img src={commentIcon} alt='comment' className='comment'/>
        <span className='text'>{props.comment}</span>
        <img src={heartIcon} alt='heart' className='heart'/>
        <span className='text'>{props.like}</span>
        <Link to={"/Post/"+PID} className='viewButton'>View</Link>
            

      </span>
    </div>
  ) 
}

export default Postbox