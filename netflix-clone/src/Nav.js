import React, { useEffect, useState } from 'react'
import './Nav.css';

function Nav() {

  const [show, handleShow] = useState(false);

  const transitionNavBar = () => {
    if(window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll",transitionNavBar)
    return () =>window.removeEventListener('scroll',transitionNavBar)
  }, []);
  
  return (
    <div className={`nav ${ show && "nav__black"}`}>
        <div className="nav__contents">
          <img src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" 
          className='nav__logo'
          alt ="NetFlix Logo" />

          <img src='https://media.istockphoto.com/id/1223671392/vector/default-profile-picture-avatar-photo-placeholder-vector-illustration.jpg?s=612x612&w=0&k=20&c=s0aTdmT5aU6b8ot7VKm11DeID6NctRCpB755rA1BIP0=' 
          className='nav__avatar'
        alt='Profile Picture'/>

        </div>
       
        
    </div>
  )
}

export default Nav