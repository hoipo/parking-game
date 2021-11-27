import { Layout as AntdLayout } from 'antd';
import Footer from '../components/footer'
import { Link } from 'react-router-dom';
import styles from './layout.module.less';


import logo from "../assets/logo.png";
const { Header, Content } = AntdLayout;

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
            <li><a href='#parking'>Parking</a></li>
            <li><a href='#features'>Features</a></li>
            <li><a href='#road-map'>Road Map</a></li>
            <li><a href='#tokenomics'>Tokenomics</a></li>
            <li><a href='#docs'>Docs</a></li>
            <li><a href='#genesis'>Genesis</a></li>
          </ul>
          <Link to='/app' className={styles['play-button']}>Play&Earn</Link>
        </div>
      </Header>
      <Content className={styles.content}>{ children }</Content>
      <Footer />
    </AntdLayout>
  )
}

export default Layout
