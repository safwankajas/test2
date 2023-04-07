
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import {motion } from 'framer-motion';
import "react-vertical-timeline-component/style.min.css";
import { styles } from '../style';
import { experiences } from '../constants';
import { SectionWrapper } from '../hoc';
import { textVariant } from '../utils/motion';

const Experience = () => {
  return (
    <>
      <motion.div varia={textVariant()}>
        <p className={styles.sectionSubText }>WHAT I HAVE DONE SO FAR</p>
        <h2 className={`${styles.sectionHeadText} `} >Work Experience.</h2>
      </motion.div>
      <div className="mt-20 flex flex-col">
        <VerticalTimeline>

        </VerticalTimeline>
      </div>
    </>
  )
}

export default SectionWrapper( Experience,"work")