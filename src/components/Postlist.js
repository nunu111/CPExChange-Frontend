import React from 'react'
import './Postlist.css'
import Postbox from './Postbox'
const PostList = () => {
  return (
    <div className='Mainbox'>
        <div className='Topicbox'>
            <span className='Text'>โพสต์ยอดฮิต</span>
            <span> / </span>
            <span  className='Text'> โพสต์ล่าสุด</span>
        </div>
        
        <Postbox/>
        <Postbox/>
        <Postbox/>
        <Postbox/>
        <Postbox/>
        <Postbox/>
        <Postbox/>
        <Postbox/>
        <Postbox/>
        <Postbox/>
        <Postbox/>

    </div>
  )
}

export default PostList