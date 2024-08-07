import React from 'react'
import heroimg from "../../assets/Frame4.png";
import pos1 from "../../assets/pos1.png";
import pos2 from "../../assets/pos2.png";

const Herot = () => {
  return (
    <div className="bg-white px-[50px] pt-[135px] ">
      <div className="flex justify-between ">
        <div>
          <h4 className="font-DmSans font-bold xs:text-[32px] xmd:text-[60px] pb-[34px]">
            <span className="text-orange">Connecting</span> businesses to <br />{" "}
            verified African
            <span className="text-orange"> Talent</span> and <br />{" "}
            <span className="text-orange">Global</span> opportunities.
          </h4>
          <p className="font-DmSans font-normal text-black xs:text-[16px] xmd:[20px]">
            We help businesses access verified African talent and global <br />
            opportunities in the{" "}
            <span className="font-extrabold">fastest, affordable</span> and most{" "}
            <span className="font-extrabold">convenient</span> <br /> way.
          </p>
          <form className="mt-[74px]" action="">
            <input
              className="xs:w-[294px] xmd:w-[390px] xs:h-[38px] xmd:h-[51px] rounded-l-[6px] pl-[32px]"
              type="email"
              placeholder="Enter your email address"
            />
            <button className="xs:w-[64px] xmd:w-[86px] xs:h-[38px] xmd:h-[51px] bg-black text-white rounded-r-[6px]">
              Join us
            </button>
          </form>
        </div>
        <div>
          <img className="shadow-customblack rounded-[4px]" src={heroimg} alt="IMAGE" />
          {/* <img src={pos1} alt="IMAGE" />
          <img src={pos2} alt="IMAGE" /> */}
        </div>
      </div>
      <p className='font-DmSans font-semibold text-[24px] pt-[202px] pb-[15px] text-center'>We are Trusted by</p>
    </div>
  );
}

export default Herot