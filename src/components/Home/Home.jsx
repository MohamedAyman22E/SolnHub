import React from 'react'
import { FaRocket } from "react-icons/fa";
import "./Home.css"
const Home = () => {
  return (
    <div>
        <section className='home'>
            <div className="container text_align ">
                <h2 className="uppercase   fw_800 text_clr_crazy_blue ">
                    marketing <br /> solution agency
                </h2>
                <p className="text_clr_whitesmoke">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus in facere porro, nulla id ut!
                </p>
                <div className="btn ">
          <button className="cursor transition">
            <span className="text_white">
              <FaRocket className="transition"/>
            </span>
            <span className="uppercase fw_500 text_clr_whitesmoke fs_16"  >
              get started
            </span>
          </button>
        </div>

            </div>
        </section>
    </div>
  )
}

export default Home