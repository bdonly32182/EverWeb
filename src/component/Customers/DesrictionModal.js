import React,{useState} from 'react'
import {Modal , Form , Button } from 'antd'
function DesrictionModal({customer}) {
    const [visible,setVisible] = useState(false);

    return (
        <div>
            <Button onClick={()=>setVisible(true)}>Description</Button>
            <Modal visible={visible}>

            </Modal>
        </div>
    )
}

export default DesrictionModal
