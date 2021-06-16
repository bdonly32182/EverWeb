import React,{useState} from 'react'
import {Modal  , Button , Select  } from 'antd'
import {useDispatch} from 'react-redux';
import {change_status} from '../../action/CustomerAction'
function ChangeStatus({customer}) {
    const dispatch = useDispatch();
    const [visible,setVisible] = useState(false);
    const [status,setStatus] = useState("")
    const {Option} = Select;

    const onOk = () => {

        dispatch(change_status({Status:status},customer._id))
        setVisible(false)
    }
    return (
        <div>
            <Button onClick={()=>setVisible(true)}>ChangeStatus</Button>
            <Modal visible={visible}
                title="Change Status"
                onCancel={()=>setVisible(false)}
                onOk={onOk}
            >
                
                <Select onChange={setStatus} style={{width:'80%'}} defaultValue={customer?.Status} >
                            <Option value="Submitted" >Submitted</Option>
                            <Option value="Reviewing" >Reviewing</Option>
                            <Option value="Approve" >Approve</Option>
                            <Option value="Reject" >Reject</Option>
                </Select> 
            </Modal>
        </div>
    )
}

export default ChangeStatus
