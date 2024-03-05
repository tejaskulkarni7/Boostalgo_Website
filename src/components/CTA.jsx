import React from 'react'
import styles from '../style'

const CTA = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
      <div className='flex-1 flex flex-col'>
        <h2 className={`${styles.heading2} text-white`}>Discover the potential of your data today!</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5 text-white`}>
          Everything you need to get started with the ultimate chatbot experience.
        </p>
      </div>
      <div className={`${styles.flexCenter} sm:ml-10 ml-0`}>
      </div>
    </section>
  )
}

export default CTA
