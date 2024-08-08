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
import Card from '../../Components/Card/Card';
import Cardxx from '../../Components/Cardxx/Cardxx';






const Homepage = () => {
  return (
    <section>
      <Herot />
      <div className=" bg-offwhite  py-[26px] xs:overflow-x-auto ">
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
        <h2 className="font-DmSans font-light xs:text-[23px] xsm:text-[36px] xmd:text-[60px] text-center xs:leading-[34px] xmd:leading-[65px] xs:py-[80px] xsm:py-[120px] xmd:py-[240px]">
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
      <div className="xs: hidden xmd:block">
        <Damhero />
      </div>
      <div className="xs: block xmd:hidden">
        <Card />
        <Cardxx />
      </div>

      <div className="relative xs:hidden xmd:block ">
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
      <div className="xs: hidden xmd:block">
        <Underhero />
      </div>

      <div className="font-DmSans xs:py-[80px] xsm:py-[100px] xmd:py-[150px] bg-notwhite">
        <div className="">
          <h3 className="font-normal text-center xs:text-[32px] xs:w-[309px] xsm:w-[340px] xmd:w-[987px] xsm:text-[38px] xmd:text-[60px] xs:leading-[40px] xsm:leading-[50px] xmd:leading-[65px]">
            <span className="font-extrabold text-orange">Recruit</span>{" "}
            top-notch talent in a few steps.Land your dream job
          </h3>
        </div>
      </div>
      <Testimonial />
      <div className="xs:block xmd:flex justify-around font-DmSans py-[62px] bg-bgimg  bg-mycolor">
        <div className=" xs:py-[68px] xsm:py-[90px] xmd:py-[120px]">
          <h3 className="xs:w-[353px] xsm:w-[412px] xmd:w-[618px] font-bold xs:text-[30px] xsm:text-[36px] xmd:text-[50px] xs:leading-[39px] xsm:leading-[45px] xmd:leading-[66px] pb-[34px] xs:text-center xmd:text-left">
            Download our Mobile App to enjoy all these benefits
          </h3>
          <p className="xs:text-center xmd:text-left  font-normal xs:text-[16px] xmd:text-[20px] xs:leading-[20px] xmd:leading-[26px] xs:pb-[59px] xsm:pb-[65px] xmd:pb-[80px] ">
            You can get our mobile app from PlayStore <br /> Click on the button
            below to get it now
          </p>
          <div className='flex  xs:justify-center xmd:justify-start'>
            <img
              className="cursor-pointer xs:w-[204px] xsm:w-[230px] xmd:w-[329px]"
              src={gplay}
              alt="IMAGE"
            />
          </div>
        </div>
        <div className="bg-newwhite border-[1px] border-bwhite rounded-[4px] xs:h-[302px] xsm:h-[332px] xmd:h-[480px] shadow-customorange xs:mt-[68px] xsm:mt-[74px] xmd:mt-[90px] xs:w-[269px] xsm:w-[299px] xmd:w-[428px] xs:mx-auto xmd:mx-0 ">
          <div className="relative right-[10%] bottom-[17%] xs:w-[299px] xsm:w-[329px] xmd:w-[475px]">
            <img className="" src={iphone} alt="IMAGE" />
          </div>
        </div>
      </div>
      <Faq />
    </section>
  );
}

export default Homepage