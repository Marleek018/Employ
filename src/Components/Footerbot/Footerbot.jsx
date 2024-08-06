import React from 'react'
import logo from '../../assets/logof.png'
import apple from '../../assets/apple.png'
import playstore from '../../assets/playst.png'


const Footerbot = () => {
  return (
    <section className="bg-dblack xs:block xmd:flex justify-between xs:pl-[50px] xmd:pl-[120px] xs:pr-[50px] xmd:pr-[260px] xs:pt-[60px] xmd:pt-[90px] xs:pb-[70px] xmd:pb-[110px]">
      <div>
        <img src={logo} alt="IMAGE" />
        <p className="font-DmSans font-normal text-[16px] text-bwhite pt-[16px] xs:pb-[30px] xmd:pb-[56px] xs:leading-[23px] xmd:leading-[20px]">
          We help businesses access verified <br /> African talent and global
          opportunities in <br /> the fastest, affordable and most <br />{" "}
          convenient way.
        </p>
        <div className="flex gap-[12px]">
          <img src={apple} alt="LOGO" />
          <img src={playstore} alt="LOGO" />
        </div>
        <h1 className="font-DmSans font-normal text-[12px] text-dgray pt-[70px] xs:hidden xmd:block">
          © 2024 Employ. All rights reserved.
        </h1>
      </div>
      <div className="xs:grid xs:grid-cols-2 xmd:flex xs:gap-[34px] xmd:gap-[70px] xs:pt-[94px] xmd:pt-[0px]">
        <div>
          <h3 className="font-DmSans font-medium text-[16px] text-white leading-[23px] pb-[20px]">
            Pricing Plans
          </h3>
          <ul>
            <li className="font-DmSans font-medium text-[16px] text-dgray leading-[23px] pb-[14px]">
              Job Seekers
            </li>
            <li className="font-DmSans font-medium text-[16px] text-dgray leading-[23px] pb-[14px]">
              For Hiring Managers
            </li>
            <li className="font-DmSans font-medium text-[16px] text-dgray leading-[23px] pb-[14px]">
              For Recruiters
            </li>
            <li className="font-DmSans font-medium text-[16px] text-dgray leading-[23px]">
              African Talents
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-DmSans font-medium text-[16px] text-white leading-[23px] pb-[20px]">
            About Employ
          </h3>
          <ul>
            <li className="font-DmSans font-medium text-[16px] text-dgray leading-[23px] pb-[14px]">
              Our Values
            </li>
            <li className="font-DmSans font-medium text-[16px] text-dgray leading-[23px] pb-[14px]">
              Our Identity
            </li>
            <li className="font-DmSans font-medium text-[16px] text-dgray leading-[23px] pb-[14px]">
              Our Mission
            </li>
            <li className="font-DmSans font-medium text-[16px] text-dgray leading-[23px]">
              Our Vision
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-DmSans font-medium text-[16px] text-white leading-[23px] pb-[20px]">
            Contact Us
          </h3>
          <ul>
            <li className="font-DmSans font-medium text-[16px] text-dgray leading-[23px] pb-[14px]">
              Help centre
            </li>
            <li className="font-DmSans font-medium text-[16px] text-dgray leading-[23px] pb-[14px]">
              FAQ
            </li>
            <li className="font-DmSans font-medium text-[16px] text-dgray leading-[23px] pb-[14px]">
              Contact
            </li>
            <li className="font-DmSans font-medium text-[16px] text-dgray leading-[23px]">
              Press
            </li>
          </ul>
        </div>
      </div>
      <h1 className="font-DmSans font-normal text-[12px] text-dgray xs:pt-[100px] xs:block xmd:hidden">
        © 2024 Employ. All rights reserved.
      </h1>
    </section>
  );
}

export default Footerbot