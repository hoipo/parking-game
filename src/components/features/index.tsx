import { Col, Row } from 'antd';
import FeatureCard from '../featureCard';
import styles from './styles.module.less';
import carImg from '../../assets/car.png';
import collectIcon from "./images/collect-icon.svg";
import battleIcon from "./images/battle-icon.svg";
import ticketIcon from "./images/ticket-icon.svg";
const Features = () => {
    return (
        <div id='features' className={styles.features}>
            <Row gutter={32}>
                <Col className={styles['title-wrapper']}>
                    <div className={styles.title}>Features</div>
                    <div className={styles.subtitle}>There are a total of 5 levels of cars, Bronze, Silver, Gold, Platinum, Legendary. The higher the level of the car, the more rewards it can generate.</div>
                </Col>
                <Col className={styles.carousel}>
                    <div className={styles.card}>
                        <img src={carImg} alt="carImg" />
                    </div>
                    <div className={styles.card}>
                        <img src={carImg} alt="carImg" />
                    </div>
                    <div className={styles.card}>
                        <img src={carImg} alt="carImg" />
                    </div>
                </Col>
            </Row>
            <Row gutter={48} className={styles['feature-card-wrapper']}>
                <Col>
                    <FeatureCard
                        icon={collectIcon}
                        title='Collect'
                        content='Buy a blind box to get a new car, which can also be sold in the market.'
                    />
                </Col>
                <Col>
                    <FeatureCard
                        icon={battleIcon}
                        title='Battle'
                        content='Go and find available parking spaces in the parking lot and get your rewards.'
                    />
                </Col>
                <Col>
                <FeatureCard
                        icon={ticketIcon}
                        title='Tickets'
                        content='Tickets can be used to fine other players for parking too long (over 7 days), and share 20% their unharvested rewards.'
                    /></Col>
            </Row>
        </div>
    )
}

export default Features
