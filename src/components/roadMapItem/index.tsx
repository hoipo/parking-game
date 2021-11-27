import styles from './styles.module.less'
export interface RoadMapItemProps {
    percentage: string;
    text: string;
}

const RoadMapItem = (props: RoadMapItemProps) => {
    const { percentage, text } = props
    return (
        <div className={styles['road-map-item']}>
            <div className={styles.percentage}>{percentage}<span>%</span></div>
            <div className={styles.text}>{text}</div>
        </div>
    )
}

export default RoadMapItem
