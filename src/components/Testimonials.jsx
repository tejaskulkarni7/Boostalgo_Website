import React from 'react';
import './InputBox.css'; // Import the CSS file for custom input styles

const EmailForm = () => {
  return (
    <section id="contact" className="paddingY flexce flex-col relative">
      <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />
      <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
        <h2 className="heading2 text-black">Contact Us to Get Started!</h2>
        <div className="w-full md:mt-0 mt-6">
          <p className="paragraph text-left max-w-[450px] text-black">
            Have a question or feedback? Feel free to send us an email.
          </p>
        </div>
      </div>
      <form className="w-full md:w-auto flex flex-col md:flex-row items-center md:justify-start">
        <div className="flex flex-col">
          <div className="inputbox">
            <input
              type="email"
              placeholder=""
              className="bg-gray-100 rounded-lg px-4 py-2 mb-4 md:mr-4 w-full md:w-auto"
            />
            <span>Your email address</span>
          </div>
          <div className="inputbox">
            <input
              type="subject"
              placeholder=""
              className="bg-gray-100 rounded-lg px-4 py-2 mb-4 md:mr-4 w-full md:w-auto"
            />
            <span>Subject</span>
          </div>
          <div className="inputbox">
            <input
              type="text"
              placeholder=""
              className="bg-gray-100 rounded-lg px-4 py-6 mb-4 md:mr-4 w-full md:w-auto"
            />
            <span>Text</span>
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md md:mb-3.5"
          >
            Submit
          </button>
        </div>
      </form>
    </section>
  );
};

export default EmailForm;
