import styles from './styles.module.scss';
// import Image from 'next/image';
// import logoSvg from '../../../public/images/logo.svg';

export function Header() {
    return(
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <img src="/images/logo.svg" alt="ig.news" />
                <nav>
                    <a className={styles.active} href="">Home</a>
                    <a href="">Posts</a>
                </nav>
            </div>
        </header>
    )
}