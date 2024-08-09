import React from 'react'
import logo from '../../assets/logo.png'
import hamb from '../../assets/hamb.png'
import { GiHamburgerMenu } from "react-icons/gi";




const Navbar = () => {
  return (
    <div className="flex justify-between my-[32px] xs:mx-[20px] xmd:mx-[50px]">
      <div>
        <img className="" src={logo} alt="IMAGE" />
      </div>
      <div className="xs:hidden xmd:block">
        <ul className=" flex gap-[30px] text-black font-normal text-[16px]  font-DmSans cursor-pointer my-[10px]">
          <li className="active:font-bold">Home</li>
          <li className="active:font-bold">Pricing</li>
          <li className="active:font-bold">About Us</li>
          <li className="active:font-bold">Contact Us</li>
        </ul>
      </div>

      <button className="bg-orange py-[15px] px-[18px] border rounded-[6px] text-white text-[16px] font-medium font-DmSans xs:hidden xmd:block hover:bg-neworange">
        Create Account
      </button>

      <div className="xs:block xmd:hidden">
        <GiHamburgerMenu className="text-[30px] my-[10px]" />
      </div>
    </div>
  );
}

export default Navbar