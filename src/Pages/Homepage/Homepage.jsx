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





const Homepage = () => {
  return (
    <section>
      <Herot />
      <div className=" bg-offwhite  py-[26px]">
        <div className="flex justify-evenly">
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
      <Subhero/>
      
    </section>
  );
}

export default Homepage