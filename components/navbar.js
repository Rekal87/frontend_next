import styles from './navbar.module.scss';
import Image from 'next/image';
import images from './images';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className={styles.app__navbar}>
      <div className='app__navbar-logo'>
        <Image src={images.logo} alt='logo' />
      </div>
      <ul className='app__navbar-links'>
        {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
          <li className='app__flex p-text' key={`link-${item}`}>
            <div />
            <Link href={`/${item}`}>{item}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
