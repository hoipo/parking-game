import { Col, Row } from 'antd'
import styles from './styles.module.less'
import bagImg from './images/bag.svg'
const Tokenomics = () => {
    return (
        <div id='tokenomics' className={styles.tokenomics}>
            <div className={styles.title}><span>NFT Road Map</span></div>
            <Row gutter={80} justify='center' align='middle'>
                <Col flex='1' className={styles.bag}>
                    <img src={bagImg} alt="bagImg"  />
                </Col>
                <Col className={styles.detail} flex='1'>
                    <ul>
                        <li>
                            <div className={styles.tit}>$ PARK</div>
                            <div className={styles.txt}>GovernanceToken</div>
                        </li>
                        <li>
                            <div className={styles.tit}>30,000 PNFT</div>
                            <div className={styles.txt}>Total PNFTs</div>
                        </li>
                        <li>
                            <div className={styles.tit}>100,000,000</div>
                            <div className={styles.txt}>Total Supply</div>
                        </li>
                    </ul>
                </Col>
            </Row>
        </div>
    )
}

export default Tokenomics
