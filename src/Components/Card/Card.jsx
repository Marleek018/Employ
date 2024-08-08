import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";
import damimg1 from "../../assets/damimg1.png";
import damimg2 from "../../assets/damimg2.png";
import under from "../../assets/underimg.png";

const Card = () => {
  return (
    <section className="font-DmSans bg-fgray py-[100px]">
      <h3 className="font-bold w-[276px] xs:text-[30px] xsm:text-[34px] leading-[30px] text-center pb-[90px]">
        Our Pricing plans are <span className="text-orange">flexible</span> and{" "}
        <span className="text-orange">super cheap</span>
      </h3>
        <div className="w-[90%] mx-auto">
          <div className="bg-orange text-offwhite xs:pl-[30px] xsm:pl-[36px] xs:pr-[21px] xsm:pr-[24] py-[24px] xs:w-[319px] xsm:w-[410px] h-[100%] border-[1px] border-black rounded-[5px]  relative shadow-customblack">
            <img
              className="w-[300px] absolute top-[-9%] left-[-0.8%]"
              src={under}
              alt="IMAGE"
            />
            <h3 className="font-bold xs:text-[24px] xsm:text-[28px] text-center ">
              For Recruiters
            </h3>
            <div>
              <h3 className="font-bold xs:text-[22px] xsm:text-[26px] pt-[27px]">
                Free{" "}
              </h3>
              <ul className="xs:text-[13px] xsm:text-[16px] font-medium">
                <li> • Post 2 jobs in a month </li>
                <li>• Access pre-verified and quality talent </li>
                <li>• Manual candidate shortlisting </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold xs:text-[22px] xsm:text-[26px] pt-[28px]">
                Premium
              </h3>
              <p className="xs:text-[12px] xsm:text-[16px] font-medium pb-[10px]">
                Recruiters pay between{" "}
                <span className="font-black">₦5,000 monthly</span> or <br />{" "}
                <span className="font-black">₦50,000 annually</span> to access
                our paid plans.
              </p>
              <ul className="xs:text-[12px] xsm:text-[16px] font-medium">
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
          <div className="flex text-orange justify-center items-center  pt-[38px]">
            <span className="font-semibold text-[18px] pb-[2px] border-b-[1px] border-orange">
              Learn more about pricing
            </span>
            <IoIosArrowRoundForward />
          </div>
        </div>

        <div>
          <div>
            <div className="flex items-center justify-center">
              <img
                className="rounded-[20px] mb-[16px] mt-[40px] w-[70%]"
                src={damimg1}
                alt="IMAGE"
              />
            </div>
            <div className="flex items-center justify-center">
              <img
                className="rounded-[20px] ml-[60px] w-[70%]"
                src={damimg2}
                alt="IMAGE"
              />
            </div>
          </div>
        </div>
      
    </section>
  );
}

export default Card