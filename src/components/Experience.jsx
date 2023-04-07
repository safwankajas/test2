
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from 'framer-motion';
import "react-vertical-timeline-component/style.min.css";
import { styles } from '../style';
import { experiences } from '../constants';
import { SectionWrapper } from '../hoc';
import { textVariant,slideIn } from '../utils/motion';

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement  
    contentStyle={{
        background: 'rgb(21, 16, 48)',
        color: '#fff',
        
      }}
      contentArrowStyle={{ borderRight: '7px solid #232631' }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img className=" w-[60%]  h-[60%] object-contain "
            src={experience.icon}
            alt={experience.company_name} />
        </div>
      }
    >

      <div>
        <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
        <p 
        style={{margin:0}}
        className=" text-secondary text-[16px] font-semibold">{experience.company_name}</p>
      
      </div>
      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point,index) =>(
          <li
          key={`experience-point-${index}`}
          className=" text-white-100 text-[14px] pl-1 tracking-wide"
          >
            {point}

          </li>
        ))

        }
      </ul>

    </VerticalTimelineElement>
  )
};

const Experience = () => {
  return (
    <>
      <motion.div 
      className=""
      variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>WHAT I HAVE DONE SO FAR</p>
        <h2 className={`${styles.sectionHeadText} `} >Work Experience.</h2>
      </motion.div>
      <motion.div
        variants={textVariant()}
       className="mt-20 flex flex-col">
        <VerticalTimeline
       
        animate={true}
        lineColor={'linear-gradient(to bottom, #121e3e, #7a40f9, #7f47fb, #854efc, #8a55fd, #7854ea, #6851d7, #594ec4, #383f97, #202f69, #121e3e, #050816)'} >
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={index}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </motion.div >
    </>
  )
}

export default SectionWrapper(Experience, "work")