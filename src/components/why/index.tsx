import styles from './styles.module.less';
import whyParkingInfinityTextBg from './images/whyParkingInfinity.svg';
import { Col, Row } from 'antd';
import TextCard from '../textCard';

const Why = () => {
  return (
    <div className={styles.why}>
      <div className={styles.content}>
        <img className={styles['why-parking-infinity-text-bg']} src={whyParkingInfinityTextBg} alt="whyParkingInfinityTextBg" />
        <div className={styles.title}>
          <p>Why</p>
          <p className={styles['title-yellow']}>Parking </p>
          <p>Infinity</p>
        </div>
        <div className={styles['card-wrapper']}>

          <Row justify="end" gutter={[48, 48]}>
            <Col offset={12}>
              <TextCard
                title='Brand New GameFi Model'
                paragraphs={['Parking Infinity designs a DeFi model that allows NFT and GameFi to operate both independently and integratively at the same time to ensure that players can obtain super high profits while enjoying the game.']}
              />
            </Col>
            <Col>
              <TextCard
                title='Earn Extra from Your Interaction'
                paragraphs={['There are many interesting rules for you to explore, such as sending tickets to other cars, which can help you get extra promising reward from interacting with other players.']}
              />
            </Col>
            <Col>
              <TextCard
                title='Community-centered Governance'
                paragraphs={['Parking Infinity is completely decentralized and governed by its lively community. Parking Infinity aims to build the most diverse and open GameFi community.']}
              />
            </Col>
          </Row>
        </div>

      </div>
    </div>
  )
}

export default Why
