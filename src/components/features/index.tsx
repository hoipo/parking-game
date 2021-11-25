import styles from './styles.module.less';

const Features = () => {
    return (
        <div className={styles.features}>
            <div className={styles.title}>Features</div>
            <div className={styles.subtitle}>There are a total of 5 levels of cars, Bronze, Silver, Gold, Platinum, Legendary. The higher the level of the car, the more rewards it can generate.</div>
        </div>
    )
}

export default Features
