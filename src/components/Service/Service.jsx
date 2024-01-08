import React from 'react'
import "./Service.css"
import sections from "../../constants/data"
import {BsArrowRightCircle} from "react-icons/bs";

const Service = () => {
  return (
    <div>
        <section className="services text_align bg_black text_white">
            <div className="container">
                    {sections.services.map(serviceEle=>{
                        return(
                            <div className="box " key={serviceEle.id}>
                                <div className="icon text_robin_blue fs_40">
                                    {serviceEle.icon}
                                </div>
                                <h2 className="title">{serviceEle.title}</h2>
                                <p className="text_grey">{serviceEle.text}</p>
                                <div className="bottom fs_26 text_grey">
                                    <BsArrowRightCircle/>
                                </div>
                            </div>
                        )
                    })}
            </div>
        </section>
    </div>
  )
}

export default Service