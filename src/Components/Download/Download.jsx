import React from 'react'
import gplay from "../../assets/gplay.png";
import iphone from "../../assets/iphone.png";

const Download = () => {
  return (
    <section>
      <div className="xs:block xmd:flex justify-around font-DmSans py-[62px] bg-bgimg  bg-mycolor">
        <div className=" xs:py-[68px] xsm:py-[90px] xmd:py-[120px]">
          <h3 className="xs:w-[353px] xsm:w-[412px] xmd:w-[618px] font-bold xs:text-[30px] xsm:text-[36px] xmd:text-[50px] xs:leading-[39px] xsm:leading-[45px] xmd:leading-[66px] pb-[34px] xs:text-center xmd:text-left">
            Download our Mobile App to enjoy all these benefits
          </h3>
          <p className="xs:text-center xmd:text-left  font-normal xs:text-[16px] xmd:text-[20px] xs:leading-[20px] xmd:leading-[26px] xs:pb-[59px] xsm:pb-[65px] xmd:pb-[80px] ">
            You can get our mobile app from PlayStore <br /> Click on the button
            below to get it now
          </p>
          <div className="flex  xs:justify-center xmd:justify-start">
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
    </section>
  );
}

export default Download