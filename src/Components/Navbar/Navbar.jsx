import React from 'react'
import logo from '../../assets/logo.png'
import hamb from '../../assets/hamb.png'

const Navbar = () => {
  return (
    <div className="flex justify-between my-[32px] xs:mx-[20px] xmd:mx-[50px]">
      <div>
        <img className="xs:w-[66px] xmd:w-[116px]" src={logo} alt="IMAGE" />
      </div>

      <ul className=" flex gap-[30px] text-black font-normal text-[16px] active:font-bold font-DmSans cursor-pointer xs:invisible xmd:visible">
        <li>Home</li>
        <li>Pricing</li>
        <li>About Us</li>
        <li>Contact Us</li>
      </ul>
      <button className="bg-orange py-[15px] px-[18px] border rounded-[6px] text-white text-[16px] font-medium font-DmSans xs:hidden xmd:block">
        Create Account
      </button>
      <img className="xs:block xmd:hidden " src={hamb} alt="IMAGE" />
    </div>
  );
}

export default Navbar