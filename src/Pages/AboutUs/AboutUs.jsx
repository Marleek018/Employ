import React from 'react'
import idimg1 from '../../assets/idimg1.png'
import idimg2 from "../../assets/idimg2.png";

const AboutUs = () => {
  return (
    <section className="font-DmSans">
      <div className="xs:py-[62px] xsm:py-[80px] xmd:py-[210px] bg-newimg">
        <h3 className="font-bold xs:text-[32px] xsm:text-[36px] xmd:text-[60px] xs:leading-[41px] xsm:leading-[45px] xmd:leading-[78px] xs:w-[] xsm:w-[] xmd:w-[1063px] text-center xs:pb-[36px] xsm:pb-[44px] xmd:pb-[97px]">
          Powering <span className="font-black">African businesses</span> and
          helping African talent achieve their career goals.
        </h3>
        <div className="flex justify-center">
          <button className="font-medium text-[16px] w-[149px] h-[51px] bg-orange text-newwhite border-[1px] border-none rounded-[6px]">
            Create Account
          </button>
        </div>
      </div>
      <div className="bg-idimg xs:px-[40px] xsm:px-[60px] xmd:px-0 xs:pt-[102px] xsm:pt-[110px] xmd:pt-[136px] xs:pb-[50px] xsm:pb-[60px] xmd:pb-[75px]">
        <h3 className="font-bold text-[16px] w-[141px] h-[51px] border-[1px] rounded-[10px] text-center py-[10px] bg-colcol xmd:ml-[14%]">
          OUR IDENTITY
        </h3>
        <div className="xs:block xmd:flex xmd:justify-evenly ">
          <div>
            <h3 className="font-bold xs:text-[34px] xsm:text-[40px] xmd:text-[70px] text-orange xs:pb-[38px] xsm:pb-[44px] xmd:pb-[53px] xmd:pt-[]">
              Our Identity
            </h3>
            <p className="font-normal xs:text-[16px] xsm:text-[20px] xmd:text-[24px] xs:w-[] xsm:w-[] xmd:w-[541px]">
              Powering African businesses and helping African talent achieve
              their career goals. <br /> <br />
              <span className="font-semibold">Employ</span> is a recruitment
              platform where businesses can access qualified and verified talent
              in the fastest, affordable and convenient way. <br />
              <br /> We also help businesses scale faster by connecting them to
              fundraising and networking opportunities. <br />
              <br />{" "}
              <span className="font-semibold">
                This is why we started the company.
              </span>
            </p>
          </div>
          <div className="">
            <img
              className="rounded-[20px] border-[1px] border-black xs:w-[70%] xmd:w-[90%] relative"
              src={idimg1}
              alt="IMAGE"
            />
            <img
              className="rounded-[20px] relative xs:left-[40px] xsm:left-[84px] xmd:left-[66px] xs:top-[-13px] xsm:top-[-26px]  xmd:top-[-3%] xmd:ml-[] border-[1px] border-black xs:w-[70%] xmd:w-[90%]"
              src={idimg2}
              alt="IMAGE"
            />
          </div>
        </div>
      </div>
      <div className="bg-misbg bg-newcol xmd:flex xmd:justify-evenly xs:py-[] xsm:py-[] xmd:py-[180px]">
        <div>
          <h3 className="font-semibold xs:text-[] xsm:text-[] xmd:text-[24px] xs:leading-[] xmd:leading-[31px] xmd:w-[575px] xmd:pt-[65px]">
            Our mission{" "}
            <span className='font-normal'>
              is democralizing quality African talent and opportunities for
              businesses in the most fast, affordable and convenient way.
            </span>{" "}
            <br /> <br />
            This is what we would become in the future.
          </h3>
        </div>
        <div>
          <h3 className='w-[151px] h-[41px] border-[1px] text-center pt-[8px] rounded-[10px] bg-lightorange text-[16px] font-bold text-orange'>OUR MISSION</h3>
          <h3 className='font-bold xs:text-[] xsm:text-[] xmd:text-[80px] xmd:w-[328px] xs:leading-[] xsm:leading-[] xmd:leading-[108px]'>Our Mission</h3>
        </div>
      </div>
    </section>
  );
}

export default AboutUs