import { useState } from 'react';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { Layout, Menu, Button } from 'antd';
import { Route, Routes, useLocation } from 'react-router-dom';
import { routes } from '../../utils/routes';
import { menuItems } from '../../constants/menuItems'

const { Header, Sider, Content } = Layout;

const Applayout = () => {
    const [collapsed, setCollapsed] = useState(false);
    const location = useLocation()

    return (
        <Layout>
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <div className="demo-logo-vertical" />
                <Menu
                    theme="light"
                    mode="inline"
                    defaultSelectedKeys={[location.pathname]}
                    items={menuItems}
                />
            </Sider>
            <Layout>
                <Header className='header'>
                    <Button
                        type="text"
                        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                        onClick={() => setCollapsed(!collapsed)}
                        className='collapse-button'
                    />
                </Header>
                <Content className='main-content'>
                    <Routes>
                        {
                            routes.map(item => <Route path={item.path} key={item.id} element={item.component} />)
                        }
                    </Routes>
                </Content>
            </Layout>
        </Layout>
    );
};
export default Applayout;