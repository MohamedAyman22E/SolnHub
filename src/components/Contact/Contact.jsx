import React from 'react'
import "./Contact.css"
import images from '../../constants/images'
const Contact = () => {
  return (
    <div className='container contact_container bg_dark '>
        <div className="left">
        <div className='heading '>
            <div className="bar"></div>
            <h2 className="capitalize text_white fw_700 fs_40 ">our Portfolio</h2>
            <p className="text_grey">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi, veritatis.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi, veritatis.</p>
        </div>
        <form action="">
            <div className="input name"><input type="text" className='text_white' /></div>
            <div className="input email"><input type="email"  className='text_white'/></div>
            <div className="input address"><input type="text"  className='text_white'/></div>
            <button type='submit ' className=' text_white uppercase fs_22 bg_robin_blue'>contact us</button>
        </form>

        </div>
        <div className="right">
            <img src={images.form_main_img} alt="" />
        </div>
        
    </div>
  )
}

export default Contact