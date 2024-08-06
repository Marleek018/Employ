import React from 'react'
import arrow from "../../assets/arrow.png";
import vec1 from '../../assets/vec1.png'
import vec2 from "../../assets/vec2.png";
import vec3 from "../../assets/vec3.png";

const Subhero = () => {
  return (
    <div>
      <div className="flex justify-between px-[88px] py-[168px] bg-fgray">
        <div>
          <h6 className="bg-lightorange border-[1px] w-[229px] text-center rounded-[10px] text-orange text-[16px] font-DmSans font-light mb-[45px]">
            Why should you trust us ?
          </h6>
          <h3 className="font-DmSans font-semibold text-[60px] leading-[78px] pb-[52px]">
            Employ Africa <span className="text-egray">is the</span> <br /> Best{" "}
            <span className="text-egray">on the</span> Continent!
          </h3>
          <h6 className="font-DmSans font-normal text-[20px]">
            Here’s why we said this
          </h6>
          <div className='flex justify-end'>
            <img  src={arrow} alt="IMAGE" />
          </div>
        </div>
        <div>
          <div className="flex gap-[11px] bg-newwhite border-[0.5px] border-jgray rounded-[12px] p-[20px] mb-[19px]">
            <img className="w-[38px] h-[38px]" src={vec1} alt="IMAGE" />
            <div>
              <h3 className="font-DmSans font-semibold text-[20px]">
                Faster time to Hire!
              </h3>
              <p className="font-DmSans font-light text-[16px] text-dgray leading-[22px] pt-[10px]">
                We help UBAgroup, SLOT Systems Limited, Express <br /> Agro
                Limited, Spectrum Phones Limited recruit the <br /> suitable
                candidates within{" "}
                <span className="font-medium text-black">seven days</span>. We
                can repeat <br /> the same thing for your company.{" "}
              </p>
            </div>
          </div>
          <div className="flex gap-[11px] bg-newwhite border-[0.5px] border-jgray rounded-[12px]  pt-[20px] pl-[20px] pr-[36px] pb-[42px] mb-[19px]">
            <img className="w-[38px] h-[38px]" src={vec2} alt="IMAGE" />
            <div>
              <h3 className="font-DmSans font-semibold text-[20px]">
                Affordability
              </h3>
              <p className="font-DmSans font-light text-[16px] text-dgray leading-[22px] pt-[10px]">
                Our recruitment solution is relatively affordable than <br />{" "}
                our competitors as we allow our recruiters post jobs <br /> for
                free.{" "}
              </p>
            </div>
          </div>
          <div className="flex gap-[11px] bg-newwhite border-[0.5px] border-jgray rounded-[12px] pt-[20px] pl-[20px] pr-[36px] pb-[42px]">
            <img className="w-[38px] h-[38px]" src={vec3} alt="IMAGE" />
            <div>
              <h3 className="font-DmSans font-semibold text-[20px]">
                Pre-vetted Talents
              </h3>
              <p className="font-DmSans font-light text-[16px] text-dgray leading-[22px] pt-[10px] ">
                Our talents are pre-vetted by a reputable third-party <br />
                verification company. Some of them are alumni from <br /> the
                best talent accelerators.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Subhero