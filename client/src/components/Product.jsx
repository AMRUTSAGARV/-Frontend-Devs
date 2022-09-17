import React from 'react'
import aboutimage from "../images/about.png"

const Product = () => {
  return (
    <div id='about'>

      <div className='about-image'>
        {/* <img src={aboutimage} alt=''/> */}
      </div> 

      <div className='about-text'>
        <h1>WTF Fitness Experience?</h1>
        <p>@ your regular gym cost?</p>
        <button>READ MORE</button>
      </div>
    </div>
  )
}

export default Product