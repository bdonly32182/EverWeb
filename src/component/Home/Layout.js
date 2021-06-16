import React,{useEffect,useState} from 'react'
import {Layout , Menu ,Row , Col , Image } from 'antd';
import {useHistory} from 'react-router-dom'
import jwtDecode from 'jwt-decode'
import LocalStorageService from '../../LocalStorage/LocalStorageServer';
import {useDispatch} from 'react-redux';
import {user_logout} from '../../action/UserAction'
function Layouts({children}) {
    const {  Content, Footer, Sider } = Layout;
    const [user , setUser] = useState({})
    const history = useHistory();
    const dispatch = useDispatch();
    useEffect(() => {
       try {
           let token = LocalStorageService.getToken();
           let jwt = jwtDecode(token);
           setUser(jwt)
       } catch (error) {
           window.location.reload()
       }
    }, [])
    const onLogout = () => {
        dispatch(user_logout())
    }
    return (
        <Layout style={{width:'100vw',height:'100vh'}}>
            <Sider
            breakpoint="lg"
            collapsedWidth="0"
        
            >
            <div className="logo" />
            <Menu  mode="inline" style={{backgroundColor:'#A2C2C3',height:'100vh'}} defaultSelectedKeys={['3']} >
                <Menu.Item key="3" onClick={()=>onLogout()} >
                    <Row>
                        <Col span={2}>
                            <Image src={'/user.png'} width={14} />
                        </Col>
                        <Col span={1} />
                        <Col span={2}>
                            {`${user?.Email}`}
                        </Col>
                    </Row>
                    
                </Menu.Item>
                <Menu.Item key="1" onClick={()=>history.push('/customers')} style={{marginTop:20}} >
                Customer
                </Menu.Item>
                <Menu.Item key="2" onClick={()=>history.push('/logs')}  >
                Logs
                </Menu.Item>
               
            </Menu>
            </Sider>
            <Layout>
            {/* <Header className="site-layout-sub-header-background" style={{ padding: 0 ,backgroundColor:'#1eae98' }} /> */}
            <Content style={{ margin: '24px 16px 0' }}>
                <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                {children}
                </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
            </Layout>
        </Layout>
    )
}

export default Layouts
