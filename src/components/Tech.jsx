import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-5'>
      {technologies.map((technology) => (
        <div className='  w-10  h-10 sm:w-28 sm:h-28' key={technology.name}>
          <BallCanvas 
          icon={technology.icon} />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "tech");
