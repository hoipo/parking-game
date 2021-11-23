import bannerImg from './images/banner.jpg';
import styles from './styles.module.less';

const Banner = () => {
  return (
    <div className={styles.banner}>
      <img src={bannerImg} alt="banner"/>
    </div>
  )
}

export default Banner
