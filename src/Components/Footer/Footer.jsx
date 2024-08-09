import React from 'react'
import inlogo from '../../assets/instagram.png'
import twlogo from "../../assets/twitter.png";
import lilogo from "../../assets/linkedin.png";
import fblogo from "../../assets/facebook.png";
import Footerbot from '../Footerbot/Footerbot';

const Footer = () => {
  return (
    <section>
      <div className="bg-bblack xs:block xmd:flex justify-around py-[44px]">
        <div className='xs:px-[20px] xmd:px-0 '>
          <div className="xs:mt-[54px] xmd:mt-[60px]">
            <button className="bg-white rounded-[10px] xs:py-[9px] xmd:py-[0px] xs:w-[119px] xmd:w-[128px] xs:h[33px] xmd:h-[41px] font-DmSans font-medium xs:text-[14px] xmd:text-[16px]">
              Contact Us
            </button>
            <h4 className="font-DmSans font-[900] xs:text-[30px] xmd:text-[50px] text-ablack xs:leading-[30px] xmd:leading-[50px] pt-[56px]">
              Ready to <br />{" "}
              <span className="text-white">take the next step?</span>{" "}
            </h4>
            <h2 className="font-DmSans font-normal xs:text-[16px]  xmd:text-[20px] text-white xs:pt-[24px] xmd:pt-[26px] xs:pb-[58px] xmd:pb-[90px]">
              Reach out to us to kickstart your journey.
            </h2>
          </div>
          <div className="xs:hidden xmd:block">
            <div className="flex gap-[46px]">
              <img src={fblogo} alt="LOGO" />
              <img src={twlogo} alt="LOGO" />
              <img src={inlogo} alt="LOGO" />
              <img src={lilogo} alt="LOGO" />
            </div>
          </div>
        </div>
          <div className="xs:px-[20px] xmd:px-0">
            <form
              className=" xs:w-[100%] xmd:w-[528px] bg-cblack px-[39px] py-[32px] rounded-[20px]"
              action=""
            >
              <div>
                <label
                  className="block pb-[5px] text-white font-DmSans font-semibold xs:text-[14px] xmd:text-[16px]"
                  htmlFor=""
                >
                  Your Name
                </label>
                <input
                  className="w-[100%] h-[52px] pl-[24px] font-DmSans font-extralight xs:text-[12px] xmd:text-[16px] bg-agray text-bgray rounded-[6px]"
                  type="text"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label
                  className="block pt-[18px] pb-[5px] text-white font-DmSans font-semibold xs:text-[14px] xmd:text-[16px]"
                  htmlFor=""
                >
                  Email Address
                </label>
                <input
                  className="w-[100%] h-[52px] pl-[24px] font-DmSans font-extralight xs:text-[12px] xmd:text-[16px] bg-agray text-bgray rounded-[6px]"
                  type="email"
                  placeholder="Enter your email address"
                />
              </div>
              <div>
                <label
                  className="block pt-[18px] pb-[5px] text-white font-DmSans font-semibold xs:text-[14px] xmd:text-[16px]"
                  htmlFor=""
                >
                  Your Message
                </label>
                <input
                  className="w-[100%] h-[109px] pl-[24px] font-DmSans font-extralight xs:text-[12px] xmd:text-[16px] bg-agray text-bgray rounded-[6px]"
                  type="text"
                  placeholder="Enter your message"
                />
              </div>
              <button className="w-[100%] h-[52px] rounded-[6px] text-white font-DmSans xs:text-[12px] xmd:text-[16px] font-semibold bg-cgray mt-[32px]">
                Send Messsage
              </button>
            </form>
            <div className="flex gap-[30px] xs:visible xmd:invisible justify-center pt-[76px] ">
              <img className="w-[20px] h-[20px]" src={fblogo} alt="LOGO" />
              <img className="w-[20px] h-[20px]" src={twlogo} alt="LOGO" />
              <img className="w-[20px] h-[20px]" src={inlogo} alt="LOGO" />
              <img className="w-[20px] h-[20px]" src={lilogo} alt="LOGO" />
            </div>
          </div>
        
      </div>
      <Footerbot />
    </section>
  );
}

export default Footer