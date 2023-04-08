import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../style';
import { SectionWrapper } from '../hoc';
import { github } from '../assets';
import { projects } from "../constants"
import { fadeIn, textVariant } from '../utils/motion';

const ProjectCard = ({ index, name, description, tags, image, source_code_link }) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.7, 3)}
    >
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }
        }
        className=" flex  rounded-2xl justify-center items-center green-pink-gradient p-[1.5px] sm:w-[360px] w-full "
      >
        <div className=' hover:animate-pulse p-5  rounded-2xl  w-full bg-tertiary'>

          <div className=' relative w-full h-[230px] '>
            <img
              className=' w-full h-full object-cover rounded-2xl'
              src={image} alt={name} />
            <div className=' absolute  inset-0 flex justify-end m-3 card-img_hover'>
              <div
                onClick={() => window.open(source_code_link, "_blank")}
                className='relative black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
              >
              
                  <span class=" animate-ping absolute inline-flex h-2/4 w-2/4 rounded-full  bg-secondary opacity-75"></span>
                  <img src={github} alt="githup" className='relative inline-flex  w-1/2 h-1/2' />

               
              </div>
            </div>
          </div>
          <div className=' mt-5'>
            <h3 className=' text-white font-bold text-[24px]'>{name}</h3>
            <p className=' mt-2 text-secondary text-[14px] '>{description}</p>
          </div>
          <div className=' mt-4  flex flex-wrap gap-2 '>
            {tags.map((tag) => (
              <p key={tag.name} className={`  text-[14px] ${tag.color} `}>
                #{tag.name}
              </p>
            ))}
          </div>
        </div>
      </Tilt>
    </motion.div>
  )
}

const Work = () => {
  return (
    <>
      <motion.div 
      variants={textVariant()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true,}}
      >
        <p className={`${styles.sectionSubText} `}>MY WORK</p>
        <h2 className={`${styles.sectionHeadText}  `}>Projects.</h2>
      </motion.div>
      <div className=' w-full flex'>
        <motion.p
           variants={fadeIn("right","spring",.1,.75)}
          className=' mt-3 text-secondary text-[17px] max-w-3xl leading-[30px] '>
          Following projects showcases my skills and experience through real-world examples of my work. Each project is briefly described with links to code repositories and live demos in it. It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively.


        </motion.p>
      </div>
      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard
            key={`project-${index}`}
            index={index}
            {...project}
          />
        )
        )
        }
      </div>

    </>
  )
}

export default SectionWrapper(Work, "")