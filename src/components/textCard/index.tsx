import styles from './styles.module.less';
export interface TextCardProps {
    title: string;
    paragraphs?: string[];
}

const TextCard = (props: TextCardProps) => {
    const { title, paragraphs } = props
    return (
        <div className={styles['text-card']}>
            <div className={styles.title}>{title}</div>
            { paragraphs?.map(t => <p className={styles.paragraph}>{t}</p>)}
        </div>
    )
}

export default TextCard
