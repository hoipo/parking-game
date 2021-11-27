import { CSSProperties, useState } from "react"
import classnames from 'classnames';
import styles from './styles.module.less';

export interface PButtonProps {
  className?: string;
  style?: CSSProperties;
  children?: React.ReactNode;
  extra?: React.ReactNode;
  type?: 'secondary' | '';
  comingSoon?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const PButton = (props: PButtonProps) => {
  const { children, extra, onClick, className, type, style, comingSoon = false } = props

  const [cs, setCs] = useState(false)
  const triggerComingSoon = () => {
    setCs(true);
    setTimeout(() => {
      setCs(false);
    }, 3000);
  }
  return (
    <button style={style} onClick={comingSoon ? triggerComingSoon : onClick} className={classnames(styles['p-button'], className, (type === 'secondary' || cs) && styles['type-secondary'])}>
      <span className={styles.text}>{cs ? 'Coming Soon'  : children}</span>
      {extra ? <span className={styles.extra}>{extra}</span> : null}
    </button>
  )
}

export default PButton
