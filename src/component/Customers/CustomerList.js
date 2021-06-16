import React,{useEffect} from 'react'
import {Table , Space  , Button } from 'antd'
import ChangeStatus from './ChangeStatus';
import {useHistory} from 'react-router-dom';
import {useDispatch,useSelector} from 'react-redux';
import {fetchs_customer} from '../../action/CustomerAction';
import Layouts from '../Home/Layout';
function CustomerList() {
    const {Column} = Table
    let uniqueId = 0;
    const history = useHistory();
    const dispatch = useDispatch();
    const customers = useSelector(state=>state.customers)
    useEffect(() => {
       dispatch(fetchs_customer())
    }, [dispatch])
    return (
        <Layouts>
            <Table
            dataSource={Array.isArray(customers)&&customers}
            rowKey={(record)=>{
                    if (!record.__uniqueId)
                record.__uniqueId = ++uniqueId;
                return record.__uniqueId;
                }}
                bordered={true}
            >   
                <Column title="Pers_ID" dataIndex="PersNo"  />
                <Column title="Firstname - Lastname" dataIndex="Fname"
                            render={(fname,record)=>`${fname} ${record.Lname}`}
                    />
                <Column title="Status" dataIndex="Status"   />
                <Column title="Address" dataIndex="Address" />
                <Column title="Manage" 
                    render={(_,record)=>
                    <Space>
                        <Button onClick={()=>history.push(`/customer/${record._id}`)} >ดูรายละเอียด</Button>
                        <ChangeStatus customer={record} />
                    </Space>}
                    />
            </Table>
        </Layouts>
    )
}

export default CustomerList
