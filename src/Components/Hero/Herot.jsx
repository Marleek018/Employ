import React from 'react'
import heroimg from "../../assets/Frame4.png";
import pos1 from "../../assets/pos1.png";
import pos2 from "../../assets/pos2.png";
import heroimg2 from '../../assets/heroimg2.png'

const Herot = () => {
  return (
    <div className="bg-white xs:px-[25px] xmd:px-[50px] xs:pt-[60px] xmd:pt-[135px] font-DmSans ">
      <div className="xs:block xmd:flex justify-between ">
        <div>
          <h4 className="xs:w-[100%] xmd:w-[684px] font-bold xs:text-center xmd:text-left xs:text-[25px] sm:text-[36px] xsm:text-[40px]  xmd:text-[60px] xs:pb-[24px] xmd:pb-[34px] xs:leading-[41px] xsm:leading-[50px] xmd:leading-[78px] tracking-[-3%]">
            <span className="text-orange">Connecting</span> businesses to{" "}
            verified African
            <span className="text-orange"> Talent</span> and{" "}
            <span className="text-orange">Global</span> opportunities.
          </h4>
          <p className="xs:text-center xmd:text-left font-normal text-black xs:text-[12px] xmd:[20px] xs:leading-[20px] xmd:leading-[26px] xs:w-[100%]">
            We help businesses access verified African talent and global
            opportunities in the{" "}
            <span className="font-extrabold">fastest, affordable</span> and most{" "}
            <span className="font-extrabold">convenient</span>  way.
          </p>
          <form
            className="xs:mt-[60px] xmd:mt-[74px] xs:flex xsm:justify-center xmd:justify-start"
            action=""
          >
            <input
              className="xs:w-[294px] xmd:w-[390px] xs:h-[38px] xmd:h-[51px] rounded-l-[6px] pl-[32px]"
              type="email"
              placeholder="Enter your email address"
            />
            <button className="xs:w-[64px] xmd:w-[86px] xs:h-[38px] xmd:h-[51px] bg-black text-white rounded-r-[6px] xs:text-[12px] xmd:text-[16px]">
              Join us
            </button>
          </form>
        </div>
        <div className="relative">
          <div>
            <img className="absolute left-[-45%] top-[-22%]" src={pos1} alt="IMAGE" />
            <img className="absolute left-[-52%] bottom-[-22%]" src={pos2} alt="IMAGE" />
          </div>

          <img
            className="shadow-customblack rounded-[4px] xs:hidden xmd:block "
            src={heroimg}
            alt="IMAGE"
          />
        </div>
        <div className="xs:flex xs:justify-end xsm:justify-center ">
          <img
            className="shadow-customblack rounded-[4px] xs:block xmd:hidden mt-[54px]"
            src={heroimg2}
            alt="IMAGE"
          />
        </div>
      </div>
      <p className=" font-semibold xs:text-[16px] xsm:text-[20px] xmd:text-[24px] xs:pt-[85px] xmd:pt-[202px] xs:pb-[12px] xmd:pb-[15px] text-center">
        We are Trusted by
      </p>
    </div>
  );
}

export default Herot