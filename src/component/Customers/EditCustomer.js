import React , {useEffect} from 'react'
import {useParams} from 'react-router-dom';
import {useSelector,useDispatch} from 'react-redux';
import {fetch_customer} from '../../action/CustomerAction'
import Layout from '../Home/Layout';
import {Card , Row , Col , Divider } from 'antd'
function EditCustomer() {
    const {id}  = useParams()
    const dispatch = useDispatch();
    const {customer,user} = useSelector(state=>state.customers)
    useEffect(() => {
       dispatch(fetch_customer(id))
    }, [dispatch])
    return (
        <Layout>
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
                    </Card>
                </Col>
            </Row>
            
        </Layout>
    )
}

export default EditCustomer
