import React from 'react'
import myimg1 from '../../assets/myimg1.png'
import myimg2 from '../../assets/myimg2.png'
import talent from '../../assets/talent.png'
import { IoIosArrowRoundForward } from "react-icons/io";
import left from '../../assets/left.png'
import right from '../../assets/right.png'

const Underhero = () => {
  return (
    <section className="font-DmSans relative">
      <img className="absolute left-[0%] top-[-15%]" src={left} alt="IMAGE" />
      <img className='absolute right-[0%] bottom-[-10%]' src={right} alt="IMAGE" />
      <div className="flex justify-evenly mb-[140px] mt-[60px] ">
        <div className="relative">
          <div className="bg-black text-newwhite pl-[48px] pr-[21px] py-[14px] h-[100%] border-[1px] border-offwhite rounded-[5px] shadow-customorange ">
            <img
              className="absolute top-[-8%] left-[22%]"
              src={talent}
              alt="IMAGE"
            />

            <h3 className=" font-bold text-[40px] text-center ">For Talents</h3>
            <div>
              <h3 className=" font-bold text-[35px] pt-[24px]">Free </h3>
              <ul className="text-[22px] font-medium">
                <li> • Search and access job opportuni1es </li>
                <li> • Get Recruiter Feedback </li>
                <li> • Get relevant job updates </li>
                <li> • Get application review applications </li>
                <li>
                  {" "}
                  • Get notifications on niche-based job <br /> openings on your
                  mail.
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-DmSans font-bold text-[35px] pt-[44px]">
                Premium
              </h3>
              <p className="font-DmSans text-[22px] font-medium pb-[14px]">
                Talent pay between{" "}
                <span className="font-black">₦1,500 monthly</span> or <br />{" "}
                <span className="font-black">₦15,000 annually</span> to access
                our paid plans.
              </p>
              <ul className="font-DmSans text-[22px] font-medium">
                <li>• Professional CV with custom templates</li>
                <li>• Access scholarship opportunities</li>
                <li>• Access career events</li>
                <li>• Access mentors</li>
                <li>
                  • Access training based on automated <br /> career path
                </li>
              </ul>
            </div>
          </div>
          <div className="flex justify-end  items-center pt-[36px] text-orange">
            <span className="font-semibold text-[20px] pb-[2px] border-b-[1px] border-orange">
              Learn more about pricing
            </span>
            <IoIosArrowRoundForward />
          </div>
        </div>

        <div className="">
          <img
            className="rounded-[20px] mb-[24px] mt-[90px]"
            src={myimg1}
            alt="IMAGE"
          />
          <img className="rounded-[20px] ml-[57px]" src={myimg2} alt="IMAGE" />
        </div>
      </div>
    </section>
  );
}

export default Underhero