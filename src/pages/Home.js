import React from 'react'
import home from '../assets/home/ok.jpg'
import home1 from '../assets/home/ok1.jpg'
import home2 from '../assets/home/ok2.jpg'
import './home.css'
export const Home = () => {
  return (
    <div>
      <div className="homeImage">
        <img src={home} alt="" />
      </div>
    </div>
  )
}
