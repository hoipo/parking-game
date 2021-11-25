import { Col, Layout, Row } from 'antd';
import logo from '../../assets/logo.png'
import telegramIcon from './images/telegram-icon.svg'
import twitterIcon from './images/twitter-icon.svg'
import mediumIcon from './images/medium-icon.svg'
import subtractIcon from './images/subtract-icon.svg'
import instagramIcon from './images/instagram-icon.svg'
import facebookIcon from './images/facebook-icon.svg'
import mailIcon from './images/mail-icon.svg'
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
                            <img src={telegramIcon} alt="telegramIcon" />
                        </Col>
                        <Col className={styles['circle-border']}>
                            <img src={twitterIcon} alt="twitterIcon" />
                        </Col>
                        <Col className={styles['circle-border']}>
                            <img src={mediumIcon} alt="mediumIcon" />
                        </Col>
                        <Col className={styles['circle-border']}>
                            <img src={subtractIcon} alt="subtractIcon" />
                        </Col>
                        <Col className={styles['circle-border']}>
                            <img src={instagramIcon} alt="instagramIcon" />
                        </Col>
                        <Col className={styles['circle-border']}>
                            <img src={facebookIcon} alt="facebookIcon" />
                        </Col>
                        <Col className={styles['circle-border']}>
                            <img src={mailIcon} alt="mailIcon" />
                        </Col>
                    </Row>
                </Col>
            </Row>
        </AntFooter>
    )
}

export default Footer
