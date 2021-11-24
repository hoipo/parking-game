import { CSSProperties } from "react"
import classnames from 'classnames';
import styles from './styles.module.less';
export interface PButtonProps {
  className?: string;
  style?: CSSProperties;
  children?: React.ReactNode;
  extra?: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const PButton = (props: PButtonProps) => {
  const { children, extra, onClick, className } = props
  return (
    <button onClick={onClick} className={classnames(styles['p-button'], className)}>
      <span className={styles.text}>{children}</span>
      {extra ? <span className={styles.extra}>{extra}</span> : null}
    </button>
  )
}

export default PButton
