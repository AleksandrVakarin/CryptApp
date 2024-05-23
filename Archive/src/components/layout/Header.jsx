import { Button, Layout, Select, Space, Modal, Drawer } from "antd";
import { useCrypto } from "../../context/crypto-context";
import { useState, useEffect } from 'react';
import CoinInfoModal from "../CoinInfoModal";
import AddAssetForm from "../AddAssetForm";

const headerStyle = {
    width: '100%',
    textAlign: 'center',
    height: 60,
    padding: '1rem',
    display: 'flex',
    justifyContent: 'space-between',
    aligItems: 'center',
  };


export default function Header () {
  const [select, setSelect] = useState(false)
  const [coin, setCoin] = useState(null)
  const [modal, setModal] = useState(false)
  const [drawer, setDrawer] = useState(true)
  const { crypto } = useCrypto()

  useEffect(() => {
    const keypress = (event) => {
        if (event.key === '/') {
            setSelect((prev) => !prev)
        }
    }
    document.addEventListener('keypress', keypress)
    return () => document.removeEventListener('keypress', keypress)
  },[])

  function handleSelect(value) {
    setCoin(crypto.find((c) => c.id === value))
    setModal(true)
  }

    return (
        <Layout.Header style={headerStyle}>
            <Select
                style={{width: 250}}
                open={select}
                onSelect={handleSelect}
                onClick={() => setSelect((prev) => !prev)}
                value="press / to open"//open with: '/'
                options={crypto.map((coin) => ({
                    lable: coin.name,
                    value: coin.id,
                    icon: coin.icon,
                }))}
                optionRender={(option) => (
                <Space>
                    <img style={{ width: 20 }} src={option.data.icon}  alt={option.data.lable} /> {' '}
                    {option.data.lable}
                </Space>
                )}
            />
            <Button type="primary" onClick={() => setDrawer(true)}>Add Asset</Button>
            <Modal title="Preview" 
                open={modal}  
                onCancel={() => setModal(false)}
                footer={null} //hover buttons the modal window
            >
                <CoinInfoModal coin={coin} />
            </Modal>

            <Drawer 
            width={600}
            title="Add Asset" 
            onClose={() => setDrawer(false)} 
            open={drawer}
            destroyOnClose
            >
                <AddAssetForm/>
            </Drawer>

        </Layout.Header>
    )
}