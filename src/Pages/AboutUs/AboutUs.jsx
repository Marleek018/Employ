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
      <div className="bg-idimg">
        <h3 className="font-bold text-[16px] w-[141px] h-[51px] border-[1px] rounded-[10px] text-center py-[10px] bg-colcol xmd:ml-[12%]">
          OUR IDENTITY
        </h3>
        <div className="xs:block xmd:flex xmd:justify-evenly">
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
          <div>
            <img className="rounded-[20px] border-[1px] border-black" src={idimg1} alt="IMAGE" />
            <img className="rounded-[20px] relative top-[-3%] xmd:ml-[70px] border-[1px] border-black" src={idimg2} alt="IMAGE" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs