import { Layout as AntdLayout } from 'antd';
import { Link } from 'react-router-dom';
import './layout.scss';
const { Header, Footer, Content } = AntdLayout;

export interface LayoutProps  { 
  children: React.ReactNode
}

const Layout  = ({ children }: LayoutProps) => {
  return (
    <AntdLayout className="layout">
      <Header>
        <Link to='/'>Parking</Link>
        <ul className="nav-list">
          <li>Parking</li>
          <li>Features</li>
          <li>Road Map</li>
          <li>Tokenomics</li>
          <li>Docs</li>
          <li>Genesis</li>
        </ul>
        <Link to='/app'>Play&Earn</Link>
      </Header>
      <Content style={{ padding: '0 50px' }}>{ children }</Content>
      <Footer style={{ textAlign: 'center' }}>Parking ©2021 Created by Parking Team</Footer>
    </AntdLayout>
  )
}

export default Layout
