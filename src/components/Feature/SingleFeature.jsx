import React ,{useState} from 'react'
import "./Feature.css"
import {BsPlusLg} from "react-icons/bs";


const SingleFeature = (feature) => {
    const [showContent,setShowContent]=useState(false)
  return (
    <div className='' key={feature.id}>
        <div className="item " >
            <div className={`item_show bg_black ${ showContent? " item_hide_border" :""}`} onClick={()=>setShowContent(!showContent)}>
                <h2 className="text_clr_whitesmoke">{feature.title}</h2>
                <button className={`text_robin_blue fs_24 ${showContent? "buttonRotate": ""}`}>
                    <BsPlusLg/>
                </button>
            </div>
            <div className={showContent?"show":"content_hide"}>
                <p className='text_grey'>{feature.text}</p>
            </div>

        </div>

    </div>
  )
}

export default SingleFeature