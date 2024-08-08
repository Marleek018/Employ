import React from 'react'
import priceimg1 from '../../assets/priceimg1.png'
import priceimg2 from "../../assets/priceimg2.png";

const Pricing = () => {
  return (
    <div className="font-DmSans">
      <div className="xs:pt-[60px] xsm:pt-[80px] xmd:pt-[102px] xs:pb-[102px] xsm:pb-[114px] xmd:pb-[135px] bg-lightorange xs:px-[10px] xmd:px-0">
        <div className="flex justify-center">
          <h3 className="font-bold xs:text-[28px] xsm:text-[32px] xmd:text-[50px] xs:w-[380px] xsm:w-[400px] xmd:w-[780px] text-center xs:leading-[41px] xsm:leading-[46px] xmd:leading-[50px] xs:pb-[24px] xmd:pb-[44px]">
            Our Pricing plans are <span className="text-orange">flexible</span>{" "}
            and <span className="text-orange">super cheap</span>
          </h3>
        </div>
        <div className="flex justify-center">
          <p className="font-normal xs:text-[16px] xmd:text-[18px] xs:w-[370px] xmd:w-[580px] xs:leading-[20px] xmd:leading-[26px] text-center">
            We help businesses access verified African talent and global
            opportunities in the <span className="font-extrabold">fastest</span>
            , <span className="font-extrabold">affordable</span> and{" "}
            <span className="font-extrabold">most convenient way.</span>
          </p>
        </div>
      </div>
      <div className="bg-adu xs:block xmd:flex xmd:justify-evenly xs:py-[80px] xsm:py-[80px] xmd:py-[90px]">
        <div className='xs:px-[36px] xmd:px-[0px]'>
          <h3 className="font-semibold text-newwhite xs:text-[30px] xsm:text-[36px] xmd:text-[40px] xs:w-[] xsm:w-[] xmd:w-[650px] xs:pb-[] xsm:pb-[] xmd:pb-[28px] ">
            Premium Pricing for <span className="text-orange">Recruiters</span>{" "}
          </h3>
          <p className="text-newwhite font-normal xs:text-[16px] xsm:text-[] xmd:text-[20px] xs:w-[] xsm:w-[] xmd:w-[590px] xs:leading-[20px] xmd:leading-[26px] xs:pb-[] xsm:pb-[] xmd:pb-[80px]">
            We help businesses access verified African talent and global
            opportunities in the <span className="font-medium">Recruiters</span>
            , <span className="font-medium">affordable</span> and{" "}
            <span className="font-medium">most convenient way.</span>
          </p>
          <div className='xmd:flex gap-[31px] '>
            <img className='xs:pb-[20px] xmd:pb-0 xs:pt-[62px] xmd:pt-0' src={priceimg1} alt="IMAGE" />
            <img className='' src={priceimg2} alt="IMAGE" />
          </div>
        </div>
        <div className="border-[1px] border-newwhite bg-black xs:w-[] xsm:w-[] xmd:w-[377px] xs:h-[] xsm:h-[] xmd:h-fit rounded-[4px] xs:pt-[] xsm:pt-[] xmd:pt-[35px] shadow-customwhite">
          <h3 className="font-bold xs:text-[] xsm:text-[] xmd:text-[40px] text-newwhite text-center xs:pb-[] xsm:pb-[] xmd:pb-[61px]">
            Premium Plan
          </h3>
          <h2 className="font-bold text-newwhite xs:text-[] xsm:text-[] xmd:text-[22px] text-center">
            ₦5,000 / <span className="font-medium">Monthly</span>
          </h2>
          <h2 className="font-medium text-[22px] text-newwhite text-center pt-[13px] pb-[13px]">
            OR
          </h2>
          <h2 className="font-bold text-newwhite xs:text-[] xsm:text-[] xmd:text-[22px] text-center xs:pb-[] xsm:pb-[] xmd:pb-[62px]">
            ₦50,000 / <span className="font-medium">Yearly</span>
          </h2>
          <div className="flex justify-center">
            <button className="xs:w-[] xsm:w-[] xmd:w-[230px] xs:h-[] xsm:h-[] xmd:h-[36px] bg-orange text-newwhite text-[16px] font-semibold rounded-[6px] xs:mb-[] xsm:mb-[] xmd:mb-[43px]">
              Buy Plan
            </button>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default Pricing