import Banner from "../components/banner"
import HeadCard from "../components/headCard"
import What from "../components/what"
import Why from "../components/why"
import Features from "../components/features"
import Footer from "../components/footer"
import styles from './styles.module.less';

const Home = () => {
    return (
        <div className={styles.home}>
            <Banner />
            <HeadCard />
            <What />
            <Why />
            <Why />
            <Features />
        </div>
    )
}

export default Home
