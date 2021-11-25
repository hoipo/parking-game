import { Row, Col } from 'antd';
import PButton from '../pButton';
import rightArrow from '../../assets/right-arrow.svg';
import styles from './styles.module.less';
import carImg from "../../assets/car.png";

const What = () => {
  return (
    <div className={styles.what}>
      <div className={styles.title}>
        <p>What is <span className={styles['title-yellow']}>Parking</span></p>
        <p>Infinity</p>
      </div>
      <Row className={styles.content}>
        <Col className={styles.car}><img src={carImg} alt="car" /></Col>
        <Col flex="auto" className={styles['text-and-button']}>
          <p>Parking Infinity is an NFT-based game that allows everyone to own the coolest and one-of-its-kind automobile in the metaverse.</p>
          <p>
            By trading NFTs, including cars, props, etc, or simply parking their beloved NFT cars in the carpark (mining), users can participate in Parking Infinity GameFi, and gain skyrocketing rewards with APR up to 300+%.</p>
            <Row className={styles['button-wrapper']} gutter={16}>
              <Col>
              <PButton  extra={<img className='right-arrow' src={rightArrow} alt="" />}>Play&Earn</PButton>
              </Col>
              <Col>
                <PButton type='secondary'>Token Metric</PButton>
              </Col>
            </Row>
        </Col>
      </Row>
    </div>
  )
}

export default What
