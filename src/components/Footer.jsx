import React from 'react'
import styles from '../style'
import { logo } from '../assets'
import { footerLinks} from '../constants'

const Footer = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
      <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
        <div className='flex-1 flex flex-col justify-start mr-10'>
          <img
            src={logo}
            alt='logo'
            className='w-[100px] h-[100px] object-contain'
          />
          <p className={`${styles.paragraph} mt-4 max-w-[310px]`}>
            A new way to chat, one bot at a time!         
          </p>
        </div>
        <div className='flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10'>
          {footerLinks.map((link) => (
            <div key={link.title} className='flex flex-col ss:my-0 my-4 min-w-[150px]'>
            </div>
          ))}
        </div>
      </div>
      <div className='w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]'>
        <p className='font-poppins font-normal text-center text-[18px] leading-[27px] text-black'>
          2024 Boostalgo. All Rights Reserved.
        </p>     
      </div>
    </section>
  )
}

export default Footer
