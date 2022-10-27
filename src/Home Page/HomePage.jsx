import styles from './HomePage.module.scss';

export const HomePage = () => {
    const homePageStyles = {
        color: 'yellow'
    }

    return (
        <div className={styles['home-page-title']}>
            Home Page</div>
    )
}