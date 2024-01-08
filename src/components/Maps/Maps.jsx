import React from 'react'
import "./Maps.css"
import Info from './Info'

const Maps = () => {
  return (
    <div className='bg_black map'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4991.650897892857!2d31.25443240009623!3d30.74232987609584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f7c1a5db6890d3%3A0x6cb789a022e4bacb!2z2YXYstin2LHYuSDYp9mE2KzZiNmH2LHZiiDYqNin2YTYrdin2KzYqNmK!5e0!3m2!1sar!2seg!4v1704682666983!5m2!1sar!2seg" ></iframe>
        <Info/>
    </div>
  )
}

export default Maps