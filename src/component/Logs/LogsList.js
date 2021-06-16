import React,{useEffect} from 'react'
import {Table , Space , Button } from 'antd'
import Layouts  from '../Home/Layout';
import {useDispatch,useSelector} from 'react-redux';
import {fetchs_logs} from '../../action/LogsAction';
import {useHistory} from 'react-router-dom'
function LogsList() {
    const logs = useSelector(state=>state.logs);
    const history = useHistory();
    const {Column} = Table
    let uniqueId = 0;
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchs_logs())
    }, [])
    return (
       <Layouts>
           <Table
       dataSource={Array.isArray(logs)&&logs}
       rowKey={(record)=>{
            if (!record.__uniqueId)
        record.__uniqueId = ++uniqueId;
        return record.__uniqueId;
        }}
       >
           <Column title="Time" dataIndex="Time"  render={(time)=>new Date(time).toLocaleDateString('th-TH',options)} />
           <Column title="Customer" dataIndex="NameCustomer" />
           <Column title="User" dataIndex="NameUser" />
           <Column title="Description" dataIndex="Description" />
           <Column title="Manage" 
            render={(_,record)=><Button onClick={()=>history.push(`/logs/${record._id}`)} >ดูรายละเอียด</Button>}
            />
       </Table>
       </Layouts>
    )
}

export default LogsList
