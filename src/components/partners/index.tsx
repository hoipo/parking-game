import { Col, Row } from 'antd'
import styles from './styles.module.less'
// import marsIcon from './images/partnet_mars.png'
const Partners = () => {
    return (
        <div id='partners' className={styles.partners}>
            <div className={styles.title}><span>Partners</span></div>
            <Row gutter={80} justify='center' align='middle'>
                <Col className={styles.item}>
                    {/* <a href="https://marsecosystem.com/home" target='_blank' rel="noreferrer"><img className={styles.mars} src={marsIcon} alt="mars" /></a> */}
                </Col>
            </Row>
        </div>
    )
}

export default Partners
