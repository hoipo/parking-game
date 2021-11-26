import PButton from '../pButton';
import styles from './styles.module.less';
import bgImg from './images/bg.svg';
import rightArrow from '../../assets/right-arrow.svg';

const HeadCard = () => {
    return (
        <div className={styles['head-card']}>
            <div className={styles['head-card-body']}>
                <img className={styles['bg-img']} src={bgImg} alt="bgImg" />
                <div className={styles['title']}>
                    <p className={styles['title-white']}>Join the <span className={styles['title-yellow']}>Parking</span></p>
                    <p className={styles['title-white']}>Revolution</p>
                </div>
                <div className={styles['subtitle-and-button']}>
                    <p className={styles['subtitle']}>
                        Get your coolest car NFT and join<br /> our Parking Infinity GameFi
                    </p>
                    <PButton className={styles['button']} extra={<img className='right-arrow' src={rightArrow} alt="" />}>Play&Earn</PButton>
                </div>
            </div>
        </div>
    )
}

export default HeadCard
