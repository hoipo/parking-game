import { Layout as AntdLayout } from 'antd';
import { Link } from 'react-router-dom';
import styles from './layout.module.less';


import logo from "./images/logo.png";
const { Header, Footer, Content } = AntdLayout;

export interface LayoutProps  { 
  children: React.ReactNode
}

const Layout  = ({ children }: LayoutProps) => {
  return (
    <AntdLayout className={styles.layout}>
      <Header className={styles.header}>
        <div className={styles['header-body']}>
          <Link to='/' className={styles.logo}><img src={logo} alt="Parking" /></Link>
          <ul className={styles.nav}>        
            <li>Parking</li>
            <li>Features</li>
            <li>Road Map</li>
            <li>Tokenomics</li>
            <li>Docs</li>
            <li>Genesis</li>
          </ul>
          <Link to='/app' className={styles['play-button']}>Play&Earn</Link>
        </div>
      </Header>
      <Content className={styles.content}>{ children }</Content>
      <Footer style={{ textAlign: 'center' }}>Parking ©2021 Created by Parking Team</Footer>
    </AntdLayout>
  )
}

export default Layout
