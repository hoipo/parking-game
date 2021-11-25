import { CSSProperties } from "react"
import classnames from 'classnames';
import styles from './styles.module.less';

console.log(styles);

export interface PButtonProps {
  className?: string;
  style?: CSSProperties;
  children?: React.ReactNode;
  extra?: React.ReactNode;
  type?: 'secondary' | '';
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const PButton = (props: PButtonProps) => {
  const { children, extra, onClick, className, type } = props
  return (
    <button onClick={onClick} className={classnames(styles['p-button'], className, type === 'secondary' && styles['type-secondary'])}>
      <span className={styles.text}>{children}</span>
      {extra ? <span className={styles.extra}>{extra}</span> : null}
    </button>
  )
}

export default PButton
