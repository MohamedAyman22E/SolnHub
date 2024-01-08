import React from 'react'
import "./Portfolio.css"
import sections from '../../constants/data'
const Portfolio = () => {
  return (
    <section className='bg_dark  container container_portfolio'>
        <div className='heading '>
            <div className="bar"></div>
            <h2 className="capitalize text_white fw_700 fs_40 ">our Portfolio</h2>
            <p className="text_grey">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi, veritatis.</p>
        </div>
        <div className="allPortfolio">
            {
                sections.portfolio.map((index)=>{
                    return(
                        <div className='box' key={index.id}>
                            <div className="img">
                                <img src={index.image} alt="" />
                            </div>
                            <div className="info">
                                <h2 className='text_white'>{index.title}</h2>
                                <hr />
                                <p className='text_white'>{index.text}</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    </section>
  )
}

export default Portfolio