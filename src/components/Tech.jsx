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
    pauseOnHover={true}
    speed={30}>
      <div className="flex  m-2  items-center h-28 gap-10">

    {technologies.map((tech)=>(
      <img className="p-2 w-14 h-14 object-contain    rounded-full" src={tech.icon} alt="" />
      ))}
      </div>
  </Marquee>
  
      
  
  
  );
};

export default SectionWrapper(Tech, "tech");
