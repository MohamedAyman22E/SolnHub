import React from 'react'
import sections from '../../constants/data'
import SingleFeature from './SingleFeature'
const Feature = () => {
  return (
    <section className='bg_md_black '>
        <div className="feature_container">
            <div className="feature_content">
                {
                    sections.features.map((feature)=>{
                        return(
                            <SingleFeature key={feature.id} {...feature}/>
                        )

                    })
                }

            </div>
        </div>
    </section>
  )
}

export default Feature