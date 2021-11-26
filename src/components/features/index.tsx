import styles from './styles.module.less';
import carImg from '../../assets/car.png';
import { Col, Row } from 'antd';
const Features = () => {
    return (
        <div className={styles.features}>
            <Row gutter={32}>
            <Col className={styles['title-wrapper']}>
                <div className={styles.title}>Features</div>
                <div className={styles.subtitle}>There are a total of 5 levels of cars, Bronze, Silver, Gold, Platinum, Legendary. The higher the level of the car, the more rewards it can generate.</div>
            </Col>
            <Col className={styles.carousel}>
                <div className={styles.card}>
                    <img src={carImg} alt="carImg"/>
                </div>
                <div className={styles.card}>
                    <img src={carImg} alt="carImg"/>
                </div>
                <div className={styles.card}>
                    <img src={carImg} alt="carImg"/>
                </div>
            </Col>
            </Row>
        </div>
    )
}

export default Features
