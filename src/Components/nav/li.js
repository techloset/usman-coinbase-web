import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
const LiTags = ({path,setPath}) => {
 

  // console.log('log', path);
  return (
    <>
      <li className={`${path == '/' && 'border-b-4 border-pink-400'} `} onClick={() => setPath(window.location.pathname)} > <Link to='/' >Home</Link> </li>
      <li className={`${path == '/About'&& 'border-b-4 border-pink-400'} `} onClick={() =>  setPath(window.location.pathname)} > <Link to='/About' >About Us</Link> </li>
      <li className={`${path ==  '/Blogpage'  && 'border-b-4 border-pink-400'} `} onClick={() =>  setPath(window.location.pathname)} > <Link to='/Blogpage'>Blog</Link> </li>
      {/* <li> <Link to='/BlogContent'>Blog Content</Link> </li> */}
      <li className={`${path == '/Contact' && 'border-b-4 border-pink-400'} `} onClick={() =>  setPath(window.location.pathname) }> <Link to='/Contact'>Contact Us</Link> </li>


    </>
  )
}

export default LiTags
