import React from 'react'
import {bill} from '../assets'
import styles, { layout } from '../style'

const Billing = () => {
  return (
    <section id='product' className={layout.sectionReverse}>
      <div className={layout.sectionImgReverse}>
        <img
          src={bill}
          alt='billing'
          className='w-[100%] h-[100%] relative z-[5]'
        />
      </div>
      <div className={layout.sectionInfo}>
        <h2 className={`${styles.heading2} text-black`}>Easily control your <br className='sm:block hidden'/> billing & invoicing.</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5 text-black`}>
          Elit enim sed massa etiam.
          Mauris eu adipiscing ultrices ametodio aenean neque.
          Fusce ipsum orci rhoncus aliporttitor integer platea placerat.
        </p>
        <div className='flex flex-row flex-wrap sm:mt-10 mt-6'>
        </div>
      </div>  
    </section>
  )
}

export default Billing
