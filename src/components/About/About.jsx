import React from 'react'
import images from '../../constants/images'
import "./About.css"

const About = () => {
  return (
    <section>
           <div className='container container_about bg_dark d_flex'>
           <div className="img">
           <img src={images.about_main_img} alt="" />
           </div>
           <div className="info_about">
            <div className="bar_about bg_robin_blue"></div>
            <h2 className='fs_40 text_white'>about us</h2>
            <p className=" text_grey  ">Lorem ipsum dolor sit amet
             consectetur adipisicing elit. Sunt eos 
             dolorem minima incidunt, voluptatem solu
             ta sapiente molestiae eaque fu
            ga omnis voluptas molestias quidem. Culpa explicabo iste iusto voluptates, libero ad!  consectetur adipisicing elit. Sunt eos 
             dolorem minima incidunt, voluptatem solu
             ta sapiente molestiae eaque fu
            ga omnis voluptas molestias quidem. Culpa explicabo iste iusto voluptates, libero ad!  consectetur adipisicing elit. Sunt eos 
             dolorem minima incidunt, voluptatem solu
             ta sapiente molestiae eaque fu
            ga omnis voluptas molestias quidem. Culpa explicabo iste iusto voluptates, libero ad!</p>
           </div>
        </div>
    </section>
 
  )
}

export default About