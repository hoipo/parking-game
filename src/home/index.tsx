import Banner from "../components/banner"
import HeadCard from "../components/headCard"
import styles from './styles.module.less';

const Home = () => {
    return (
        <div className={styles.home}>
            <Banner />
            <HeadCard />
        </div>
    )
}

export default Home
