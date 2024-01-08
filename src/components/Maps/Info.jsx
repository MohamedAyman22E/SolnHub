import React from 'react'
import "./Maps.css"
import sections from '../../constants/data'
import { BsArrowRightCircle } from 'react-icons/bs';

const Info = () => {
  return (
    <div className='container .container_map_info'>
        <div className="container_info">
            {
                sections.contact.map((infoEle)=>{
                    return <div key={infoEle.id}>
                    <div className='box' key={infoEle.id}>
                        <div className="icon text_robin_blue fs_36">
                            {infoEle.icon}
                        </div>
                        <h2 className="title">
                            {infoEle.info}
                        </h2>
                        <p className='text_clr_whitesmoke'>{infoEle.text}</p>
                        <div className="arrow">
                            {<BsArrowRightCircle/>}
                        </div>
                    </div>
                    </div>
                })
            }

        </div>
    </div>
  )
}

export default Info