import {Layout, Spin } from 'antd';
import Header from './Header';
import Sider from './Sider';
import Content from './Content';
import { useContext } from 'react';
import CryptoContext from '../../context/crypto-context';

export default function AppLayout() {
    const { loading } = useContext(CryptoContext)
    if (loading) {
        return <Spin fullscreen />
    }
 return (
    <Layout>
        <Header/>
        <Layout>
        <Sider/>
        <Content/>
        </Layout>
    </Layout>
 )
}