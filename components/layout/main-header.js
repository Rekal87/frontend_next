import styles from './main-header.module.scss';
import { motion } from 'framer-motion';
import Image from 'next/image';
import images from '../images';

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
};

export default function MainHeader() {
  return (
    <div id={styles.home} className={(styles.app__header, styles.app__flex)}>
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className={styles.app__header_info}
      >
        <div className={styles.app__header_badge}>
          <div className={styles.badge_cmp}>
            <span>👋</span>
            <div style={{ marginLeft: 20 }}>
              <p className='p-text'>Hello, I am</p>
              <h1 className='head-text'>Nnamdi</h1>
            </div>
          </div>

          <div className={styles.tag_cmp}>
            <p className='p-text'>Web Developer</p>
            <p className='p-text'>Freelancer</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className='app__header_img'
      >
        <Image src={images.profile} alt='profile_bg' />
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          //!! fix image not showing properly
          src={images.circle}
          alt='profile_circle'
          className='overlay_circle'
        />
      </motion.div>

      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className={styles.app__header_circles}
      >
        {[images.flutter, images.redux, images.sass].map((circle, index) => (
          <div className='cirle-cmp app__flex' key={`circle-${index}`}>
            <Image src={circle} alt='circle' />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
