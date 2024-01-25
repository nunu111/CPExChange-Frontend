import React from 'react'
import pinIcon from './Icon/pin.svg'
import PostTag from './posttag'
const Postbox =() => {

  return (
    <div className='Postbox'>
      <span className='Title'>Postsamplewdfewgewrewgggggg</span>
      <img src={pinIcon} alt='pin' className='bookmark'/>
      
      <hr/>
        <PostTag TagName={'โพสต์ล่าสุด'}/>
        <PostTag TagName={'โพสต์ล่าสุด'}/>
        <br/>
        <p className='detail'>
        qfqwfqwf
        </p>
      <span>when</span>
    </div>
  ) 
}

export default Postbox