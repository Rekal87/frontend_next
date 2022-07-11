import styles from './navbar.module.scss';
import Image from 'next/image';
import images from './images';
import Link from 'next/link';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Navbar() {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className={styles.app__navbar}>
      <div className={styles.app__navbar_logo}>
        <Image src={images.logo} alt='logo' />
      </div>
      <ul className={styles.app__navbar_links}>
        {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
          <li className='app__flex p-text' key={`link-${item}`}>
            <div />
            <Link href={`/${item}`}>{item}</Link>
          </li>
        ))}
      </ul>
      <div className={styles.app__navbar_menu}>
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: 'easeOut' }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
                <li key={item}>
                  <Link href={`/${item}`}>{item}</Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
}
