import Link from 'next/link';
import styles from './button.module.css';

function Button(props) {
  return (
    <Link href={props.link} legacyBehavior>
      <a className={styles.btn}>{props.children}</a>
    </Link>
  );
}

export default Button;
