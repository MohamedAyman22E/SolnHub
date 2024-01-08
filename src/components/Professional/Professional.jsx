import React from 'react'
import "./Professional.css"
import sections from '../../constants/data'

const Professional = () => {
  return (
    <section>
        <div className='container container_professional bg_black d_flex'>
            <div className="info">
                <div className="bar bg_robin_blue"></div>
                <h2 className='fs_40 text_white'>we are <br /> Professionals</h2>
                <p className="text_grey">Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem beatae ratione adipisicing elit. Autem beatae ratione culpa sit id? Illum!</p>
                <div className="order_list ">
                    {
                    sections.qualities.map(index=>{
                        return(
                            <div className='small_order' key={index.id}>
                                <div className="icon text_robin_blue fs_40">
                                {index.icon}
                                </div>
                                <div className="text">
                                    <h2 className="text_white">{index.title}</h2>
                                    <p className='text_grey'>{index.text}</p>
                                </div>
                            </div>
                        )
                    })
                    }

                </div>
            </div>
            <div className="img">
                <img src={require("../../assets/images/professionals_main_img.jpg")} alt="" />
            </div>


        </div>

    </section>
  )
}

export default Professional