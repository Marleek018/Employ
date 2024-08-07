import React from 'react'
import Herot from '../../Components/Hero/Herot';
import slot from '../../assets/slot.png'
import rev from "../../assets/revo.png";
import uba from "../../assets/uba.png";
import lbs from "../../assets/lbs.png";
import fate from "../../assets/fate.png";
import found from "../../assets/found.png";
import star from "../../assets/star.png";
import spectrum from "../../assets/spectrum.png";
import Subhero from '../../Components/Subhero/Subhero';
import vec4 from '../../assets/vec4.png'
import Damhero from '../../Components/Damhero/Damhero';
import sidevec from '../../assets/sidevec.png'
import Underhero from '../../Components/Underhero/Underhero';
import Testimonial from '../../Components/Testimonial/Testimonial';
import gplay from '../../assets/gplay.png'
import iphone from '../../assets/iphone.png'
import Faq from '../../Components/Faq/Faq';






const Homepage = () => {
  return (
    <section>
      <Herot />
      <div className=" bg-offwhite  py-[26px]">
        <div className="flex justify-evenly items-center">
          <img className="w-[76px] h-[20px]" src={slot} alt="IMAGE" />
          <img className="w-[84px] h-[57px]" src={rev} alt="IMAGE" />
          <img className="w-[85px] h-[31px]" src={uba} alt="IMAGE" />
          <img className="w-[104px] h-[36px]" src={lbs} alt="IMAGE" />
          <img className="w-[81px] h-[41px]" src={fate} alt="IMAGE" />
          <img className="w-[89px] h-[23px]" src={found} alt="IMAGE" />
          <img className="w-[64px] h-[56px]" src={star} alt="IMAGE" />
          <img className="w-[121px] h-[24px]" src={spectrum} alt="IMAGE" />
        </div>
      </div>
      <Subhero />
      <div className="relative">
        <h2 className="font-DmSans font-light text-[60px] text-center leading-[65px] py-[240px]">
          <span className="font-extrabold text-orange">Worry no more</span>{" "}
          about fake talents <br /> or recruiters spamming you
        </h2>
        <div>
          <img
            className="absolute right-[0%] top-[50%]"
            src={vec4}
            alt="IMAGE"
          />
        </div>
      </div>
      <Damhero />
      <div className="relative">
        <h3 className="text-center font-DmSans text-[60px] font-normal leading-[65px] py-[240px]">
          <span className="text-orange font-extrabold">Save time </span>
          by recruiting quality talent in <br /> minutes. Get recruitment
          feedback fast
        </h3>
        <div>
          <img
            className="absolute right-[0%] top-[55%]"
            src={sidevec}
            alt="IMAGE"
          />
        </div>
      </div>
      <Underhero />
      <div className="font-DmSans text-[60px] leading-[65px] py-[150px] bg-notwhite">
        <h3 className="font-normal text-center">
          <span className="font-extrabold text-orange">Recruit</span> top-notch
          talent in a few steps. <br /> Land your dream job
        </h3>
      </div>
      <Testimonial />
      <div className="flex justify-around font-DmSans py-[62px] bg-bgimg  bg-mycolor">
        <div className="py-[120px]">
          <h3 className="font-bold text-[50px] leading-[66px] pb-[34px]">
            Download our Mobile App <br /> to enjoy all these benefits
          </h3>
          <p className="font-normal text-[20px] leading-[26px] pb-[80px] ">
            You can get our mobile app from PlayStore <br /> Click on the button
            below to get it now
          </p>
          <img className="cursor-pointer" src={gplay} alt="IMAGE" />
        </div>
        <div className="bg-newwhite border-[1px] border-bwhite rounded-[4px] h-[480px] shadow-customorange mt-[90px] ">
          <div className="relative right-[10%] bottom-[17%]">
            <img className="" src={iphone} alt="IMAGE" />
          </div>
        </div>
      </div>
      <Faq/>
    </section>
  );
}

export default Homepage