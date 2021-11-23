import styles from './styles.module.less';
import bgImg from './images/bg.svg';

const HeadCard = () => {
    return (
        <div className={styles['head-card']}>
            <div className={styles['head-card-body']}>
                <img className={styles['bg-img']} src={bgImg} />
                <div className={styles['title']}>
                    <p className={styles['title-white']}>Join the <span className={styles['title-yellow']}>Parking</span></p>
                    <p className={styles['title-white']}>Revolution</p>
                </div>
                <div className={styles['subtitle-and-button']}>
                    <p className={styles['subtitle']}>
                        Get your coolest car NFT and join<br /> our Parking Infinity GameFi
                    </p>
                    <button className={styles['button']}>Play&Earn</button>
                </div>
            </div>
        </div>
    )
}

export default HeadCard
