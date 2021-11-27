import styles from './styles.module.less'
import RoadMapItem from '../roadMapItem'
import { Col, Row } from 'antd'

const data = [
    {
        percentage: '10', 
        text: 'Randomly draw 20 contract addresses and airdrop 20 NFTs'
    },
    {
        percentage: '25', 
        text: 'Randomly select 10 contract addresses to airdrop BNB, and randomly select 30 contract'
    },
    {
        percentage: '30', 
        text: 'Randomly select 10 contract addresses to airdrop BNB, and randomly select 30 contract'
    },
    {
        percentage: '40', 
        text: 'Invest in BNB to build DAO community'
    },
    {
        percentage: '50', 
        text: '100 players will be drawn according to their active participation in the game, and 5 will be'
    },
    {
        percentage: '55', 
        text: 'drawn to issue special NFT airdrops'
    },
    {
        percentage: '60', 
        text: '100 players will be drawn according to their active participation in the game, and 5 will be'
    },
    {
        percentage: '80', 
        text: 'Draw 200 users, privately customize special edition offline products'
    },
    {
        percentage: '100', 
        text: 'Mystery Prize'
    }
]

const RoadMap = () => {
    return (
        <div id='road-map' className={styles['road-map']}>
            <div className={styles.title}><span>NFT Road Map</span></div>
            <Row gutter={[80,80]} className={styles['item-wrapper']} justify='space-between'>
                {data.map(item => <Col key={item.percentage}>
                    <RoadMapItem
                        percentage={item.percentage}
                        text={item.text}
                    />
                </Col>)}
            </Row>
        </div>
    )
}

export default RoadMap
