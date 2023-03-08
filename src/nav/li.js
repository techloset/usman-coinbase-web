import React from 'react'
import { Link } from 'react-router-dom'
const li = () => {
  return (
    <>
     <li> <Link to='/'>Home</Link> </li>
     <li> <Link to='/About'>About Us</Link> </li>
     <li> <Link to='/Blogpage'>Blog</Link> </li>
     <li> <Link to='/BlogContent'>Blog Content</Link> </li>
     <li> <Link to='/Contact'>Contact Us</Link> </li>
        
          
    </>
  )
}

export default li
