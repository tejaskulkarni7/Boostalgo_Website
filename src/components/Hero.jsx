import styles from '../style'
import {screen} from '../assets'
import GetStarted from './GetStarted'

const Hero = () => {
  return (
    <section id='home' className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className='flex flex-row justify-between items-center w-full'>
          <h1 className='flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] ss:leading-[100.8px] leading-[75px]'>
            {/* Wrap "Boost Your" in a span with black color */}
            <span className='text-black'>Boost Your</span> <span className='text-gradient'>Business</span> With <span className='text-gradient'>Boostalgo.</span>
          </h1>
          <div className='ss:flex hidden md:mr-4 mr-0'>
            <GetStarted />
          </div>
        </div>
        <p className={`${styles.paragraph} max-w-[470px] mt-5 text-black`}>
          Our team of experts uses generative AI technologies to boost your leads.  
        </p>
      </div>
      
      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        {/* Content for the third column */}
      </div>
      <div>
        <img
          src={screen}
        />    
      </div>
    </section>
  )
}

export default Hero

