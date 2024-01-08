import React from 'react'
import "../Portfolio/Portfolio.css"
import sections from '../../constants/data'
import {MdStar} from "react-icons/md";
import "./Testimonial.css"

const Testimonial = () => {
  let startList;
const showRating =(starCount)=>{
  startList=new Array(starCount)
  for(let i=0;i<startList.length;i++){
    startList[i]=<MdStar size={25}/>
  }
  return startList

}

  return (
    <section className='bg_black'>
        <div className="container testimonial_container">
        <div className='heading '>
            <div className="bar"></div>
            <h2 className="capitalize text_white fw_700 fs_40 ">customer Testimonial</h2>
            <p className="text_grey">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi, veritatis.</p>
        </div>

        <div className="test_all">
          {
            sections.testimonials.map((text)=>{
              showRating(text.rating)
              return(
             <div className="test_box bg_dark" key={text.id}>
              <div className="img">
                <img src={text.image} alt="" />
              </div>
              <h2 className='text_white fs_36'>{text.name}</h2>
              <p className='text_grey'>{text.text}</p>
              <ul className=" d_flex ">
              {
                startList.map((star,index)=>{
                  return(
                    <li key={index} className='text_robin_blue'>{star}</li>
                  )
                })
              }
              </ul>
             </div>
              )
            })
          }
        </div>
        </div>
    </section>
  )
}

export default Testimonial