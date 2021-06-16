import React,{useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux';
import {fetch_log} from '../../action/LogsAction';
import {Card , Row , Col } from 'antd'
import Layouts from '../Home/Layout';
function EditLogs() {
    const {id} = useParams();
    const dispatch = useDispatch();
    const {customer,user,log} = useSelector(state=>state.logs)
    useEffect(() => {
        dispatch(fetch_log(id))
    }, [dispatch])
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

    return (
       <Layouts>
            <Row gutter={16} style={{marginTop:100}} >
                <Col span={4} />
                <Col span={8}  >
                    <Card title="ข้อมูลลูกค้า" >
                    <p>{`Name: ${customer?.Fname} ${customer?.Lname}`}</p>
                    <p>{`PersID : ${customer?.PersNo}`}</p>
                    <p>{`Address: ${customer?.Address}`}</p>
                    <p>{`Status: ${customer?.Status}`}</p>
                    </Card>
                </Col>
                <Col span={8}>
                    <Card title="ข้อมูลผู้ใช้งาน" style={{height:'100%'}} >
                    <p>{`Name: ${user?.Fname} ${user?.Lname}`}</p>
                    <p>{`Email: ${user?.Email}`}</p>
                    <p>{`Time: ${new Date(log?.Time).toLocaleDateString('th-TH',options)}`}</p>
                    <p>{`Description: ${log?.Description}`}</p>
                    </Card>
                </Col>
            </Row>
       </Layouts>
    )
}

export default EditLogs
