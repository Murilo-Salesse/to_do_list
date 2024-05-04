import imgLogo from '../../assets/images/logo.svg';
import styles from './Header.module.css';

export function Header() {
  return (
    <header>
      <div className={styles.wrapperHeader}>
        <img src={imgLogo} alt="logo to do list" />

        <div className={styles.wrapperName}>
          <span className={styles.firstName}>to</span>
          <span className={styles.secondName}>do</span>
        </div>
      </div>
    </header>
  );
}
