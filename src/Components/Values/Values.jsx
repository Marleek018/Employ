import React from 'react'
import magicstar from '../../assets/magicstar.png'
import light from "../../assets/light.png";
import cup from "../../assets/cup.png";
import tri from "../../assets/tri.png";

const Values = () => {
  return (
    <section className="bg-newwhite xs:pt-[72px] xsm:pt-[110px] xmd:pt-[189px] xs:pb-[146px] xsm:pb-[164px] xmd:pb-[200px]">
      <div className="flex justify-center">
        <h3 className="w-[151px] h-[41px] border-[1px] text-center pt-[8px] rounded-[10px] bg-lightorange text-[16px] font-bold text-orange">
          OUR VALUES
        </h3>
      </div>

      <h3 className="font-bold xs:text-[34px] xsm:text-[44px] xmd:text-[80px] pt-[34px] pb-[2px] text-center">
        Our Values
      </h3>
      <p className="font-normal text-center xs:text-[16px] xsm:text-[20px]  xmd:text-[24px] pb-[56px]">
        Our values are really dear to our heart.
      </p>
      <div className="xs:flex justify-center">
        <div className="xs:block xmd:flex xmd:justify-center xmd:gap-[18px]">
          <div className="border-[1px] border-jgray rounded-[12px] xs:w-[293px] xmd:w-[270px] h-fit  px-[27px] pt-[35px] pb-[25px] xs:mb-[36px] xmd:mb-0">
            <div className="flex justify-center">
              <img className="w-[36px]" src={magicstar} alt="IMAGE" />
            </div>
            <h3 className="text-center font-semibold xs:text-[] xmd:text-[20px] pt-[17px]">
              Simplicity
            </h3>

            <p className="text-center xs:text-[] xmd:text-[13px] font-light pt-[10px] text-">
              Ensuring our customers easily and affordably achieve their desired
              outcome is our goal.
            </p>
          </div>
          <div className="border-[1px] border-jgray rounded-[12px] xs:w-[293px] xmd:w-[270px] h-fit  px-[32px] pt-[28px] pb-[33px] xs:mb-[36px] xmd:mb-0">
            <div className="flex justify-center">
              <img src={light} alt="IMAGE" />
            </div>
            <h3 className="text-center font-semibold xs:text-[] xmd:text-[20px] pt-[17px]">
              Innovation
            </h3>

            <p className="text-center xs:text-[] xmd:text-[13px] font-light pt-[10px]">
              We find unique ways to deliver superior service to our customers.
            </p>
          </div>
          <div className="border-[1px] border-jgray rounded-[12px] xs:w-[293px] xmd:w-[270px] h-fit  px-[48px] pt-[28px] pb-[33px] xs:mb-[36px] xmd:mb-0">
            <div className="flex justify-center">
              <img src={tri} alt="IMAGE" />
            </div>
            <h3 className="text-center font-semibold xs:text-[] xmd:text-[20px] pt-[17px]">
              Novelty
            </h3>

            <p className="text-center xs:text-[] xmd:text-[13px] font-light pt-[10px]">
              Introducing new technology into the recruitment platform.
            </p>
          </div>
          <div className="border-[1px] border-jgray rounded-[12px] xs:w-[293px] xmd:w-[270px] h-fit  px-[32px] pt-[36px] pb-[33px]">
            <div className="flex justify-center">
              <img className="w-[36px]" src={cup} alt="IMAGE" />
            </div>
            <h3 className="text-center font-semibold xs:text-[] xmd:text-[20px] pt-[17px]">
              Excellence
            </h3>

            <p className="text-center xs:text-[] xmd:text-[13px] font-light pt-[10px]">
              We are committed to delivering excellent service to our customers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Values