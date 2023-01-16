import { Layout,Row,Menu } from 'antd';
import React,{FC} from 'react';
import { useNavigate } from 'react-router-dom';
import { RouteNames } from '../router';
import { useTypedSelector } from '../hooks/useTypedSelector';
const Navbar:FC = () => {
    const navigate = useNavigate();
    const {isAuth }= useTypedSelector(state=>state.auth);
    return (
        <Layout.Header>
            <Row justify="end">
                {
                    isAuth ? (
                        <>
                        <div style={{color:'white'}}>Birzhan</div>
                        <Menu theme="dark" mode="horizontal" selectable={false}>
                            <Menu.Item onClick={()=>{
                                console.log('Exit')
                                }} key="0">Exit</Menu.Item>
                        </Menu>
                        </>
                    ):(
                        <Menu theme="dark" mode="horizontal" selectable={false}>
                            <Menu.Item onClick={()=>{
                                navigate(RouteNames.LOGIN);
                                }} key="0">Login</Menu.Item>
                        </Menu>
                    )
                }
                
            </Row>
        </Layout.Header>
    );
};

export default Navbar;