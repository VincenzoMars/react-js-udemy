import { Link } from 'react-router-dom'
import styles from './Welcome.module.scss'

const WelcomePage = () => {

    return (
        <div className={styles.pageWrapper}>
            <h2 className={styles.subTitle}>Welcome to</h2>
            <h1 className={styles.title}>WHATCH!</h1>
            <Link to='/movies' className={styles.subTitleSecondary}>Run to Catalog</Link>
        </div>
    );
}

export default WelcomePage;
