import styles from './Header.module.css'

export const Header = () => {
  return (
    <header>
      <a href=""><img className={styles.logo} src="/images/logo-white-svg.svg" alt="" /></a>
      <nav>
        <ul className={styles['nav__links']}>
          <li>
            <a href="#">Login</a>
          </li>
          <li>
            <a href="#">Register</a>
          </li>
          <li>
            <a href="#">Procedures</a>
          </li>
          <li>
            <a href="#">Book</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
          <li>
            <a href="#">Logout</a>
          </li>
        </ul>
      </nav>
      <a className={styles.cta} href="#">
        <button>My profile</button>
      </a>
    </header>
  );
};
