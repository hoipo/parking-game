import styles from './styles.module.less'

export interface FeatureCardProps {
    icon: string;
    title: string;
    content?: string;
}

const FeatureCard = (props: FeatureCardProps) => {
    const { icon, title, content } = props
    return (
        <div className={styles['feature-card']}>
            <img  className={styles.icon}src={icon} alt="" />
            <div className={styles.title}>{title}</div>
            <div className={styles.content}>{content}</div>
        </div>
    )
}

export default FeatureCard
