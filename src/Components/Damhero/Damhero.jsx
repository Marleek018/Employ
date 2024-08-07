import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";
import damimg1 from '../../assets/damimg1.png'
import damimg2 from "../../assets/damimg2.png";
import under from '../../assets/underimg.png'




const Damhero = () => {
  return (
    <section className="font-DmSans bg-fgray py-[100px]">
      <h3 className="font-bold text-[50px] leading-[50px] text-center pb-[90px]">
        Our Pricing plans are <span className="text-orange">flexible</span>{" "}
        <br /> and <span className="text-orange">super cheap</span>
      </h3>
      <div className="flex justify-evenly ">
        <div className="">
          <img className="rounded-[20px] mb-[24px] mt-[30px]" src={damimg1} alt="IMAGE" />
          <img className="rounded-[20px] ml-[57px]" src={damimg2} alt="IMAGE" />
          <div className="flex justify-end text-orange items-center pt-[70px]">
            <span className="font-semibold text-[20px] pb-[2px] border-b-[1px] border-orange">Learn more about pricing</span>
            <IoIosArrowRoundForward />
          </div>
        </div>
        <div className="bg-orange text-offwhite pl-[48px] pr-[21px] py-[24px] h-[100%] border-[1px] border-black rounded-[5px] relative shadow-customblack">
          <img
            className="absolute top-[-9%] left-[-0.8%]"
            src={under}
            alt="IMAGE"
          />
          <h3 className="font-DmSans font-bold text-[40px] ">For Recruiters</h3>
          <div>
            <h3 className="font-DmSans font-bold text-[35px] pt-[24px]">
              Free{" "}
            </h3>
            <ul className="font-DmSans text-[22px] font-medium">
              <li> • Post 2 jobs in a month </li>
              <li>• Access pre-verified and quality talent </li>
              <li>• Manual candidate shortlisting </li>
            </ul>
          </div>
          <div>
            <h3 className="font-DmSans font-bold text-[35px] pt-[44px]">
              Premium
            </h3>
            <p className="font-DmSans text-[22px] font-medium pb-[14px]">
              Recruiters pay between{" "}
              <span className="font-black">₦5,000 monthly</span> or <br />{" "}
              <span className="font-black">₦50,000 annually</span> to access our
              paid plans.
            </p>
            <ul className="font-DmSans text-[22px] font-medium">
              <li>• Post 3 – 5 jobs</li>
              <li>• Add 2 extra users</li>
              <li>• Access HR documents</li>
              <li>• Automated candidate shortlisting</li>
              <li>• Access HR advisory</li>
              <li>• Access funded programs</li>
              <li>• Access networking events</li>
              <li>• Access niche-based masterclasses</li>
              <li>• Get automated interview reports</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Damhero