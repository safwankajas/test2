import React from "react";

import Marquee from "react-fast-marquee";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
   
    <Marquee 
    gradient={true}
    gradientColor={[5 ,8 ,22]}
    gradientWidth={200}
    pauseOnClick={true}
    speed={50}>
      <div className="flex  items-center h-28 gap-10">

    {technologies.map((tech)=>(
      <img className="  w-20 h-20 object-contain    rounded-full" src={tech.icon} alt="" />
      ))}
      </div>
  </Marquee>
  
      
  
  
  );
};

export default SectionWrapper(Tech, "tech");
