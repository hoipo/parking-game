import { Col, Layout, Row } from 'antd';
import logo from '../../assets/logo.png'
import telegramIcon from './images/telegram-icon.svg'
import twitterIcon from './images/twitter-icon.svg'
import subtractIcon from './images/subtract-icon.svg'
import instagramIcon from './images/instagram-icon.svg'
import facebookIcon from './images/facebook-icon.svg'
import styles from './styles.module.less'

const { Footer: AntFooter } = Layout;

const Footer = () => {
    return (
        <AntFooter className={styles.footer}>
            <Row className={styles.content} justify="space-between" align='middle'>
                <Col className={styles['logo-wrapper']}>
                    <img className={styles.logo} src={logo} alt="logo" />
                </Col>
                <Col className={styles.socials}>
                    <Row justify="space-between" align='middle'>
                        <Col>OUR SOCIALS:</Col>
                        <Col className={styles['circle-border']}>
                            <a target="_blank" href='https://t.me/parkinginfinity' rel="noreferrer"><img src={telegramIcon} alt="telegramIcon" /></a>
                        </Col>
                        <Col className={styles['circle-border']}>
                            <a target="_blank" href='https://twitter.com/InfinityParking' rel="noreferrer"><img src={twitterIcon} alt="twitterIcon" /></a>
                        </Col>
                        <Col className={styles['circle-border']}>
                            <a target="_blank" href='https://discord.gg/zPcADh4fSA' rel="noreferrer"><img src={subtractIcon} alt="subtractIcon" /></a>
                        </Col>
                        <Col className={styles['circle-border']}>
                            <a target="_blank" href='https://www.instagram.com/parking_infinity/' rel="noreferrer"><img src={instagramIcon} alt="instagramIcon" /></a>
                        </Col>
                        <Col className={styles['circle-border']}>
                            <a target="_blank" href='https://www.facebook.com/Parking_Infinity-100132085847765' rel="noreferrer"><img src={facebookIcon} alt="facebookIcon" /></a>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </AntFooter>
    )
}

export default Footer
