import React from 'react'
import {Form , Input , notification , Button , Row , Col } from 'antd';
import {useDispatch} from 'react-redux';
import {user_login} from '../../action/UserAction'
function Login({role , setRole}) {
    const layout = 
    {
    
      labelCol: {
        span: 8,
      },
      wrapperCol: {
        span: 12,
      }
      ,
    };
    const tailLayout = 
    {
      wrapperCol: {
        offset: 12,
        span: 12,
      },
    };
    const [form] = Form.useForm();
    const dispatch = useDispatch();
    const onLogin = () => {
        form.validateFields()
        .then((values) => {
            console.log(values);
            dispatch(user_login(values,setRole))
        }).catch((err) => {
            notification.error({message:"Form Validate Fail"})
        });
    }
    return (
        <div style={{margin:50,position:'relative' }}>
            
            <Row gutter={{xs:8,sm: 16, md: 24, lg: 32 }}>
                <Col className="gutter-row" span={6}>
                </Col>
                <Col className="gutter-row" span={12}>
                    <Form form={form} onFinish={onLogin} {...layout} >
                        <Form.Item
                        label="Email"
                        name="Email"
                        rules={[{ required: true, message: 'Please Input Your Email!' }]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                        label="Password"
                        name="Password"
                        rules={[{ required: true, message: 'Please Input Your Password!' }]}
                        >
                            <Input type="password" />
                        </Form.Item>
                        <Form.Item {...tailLayout}>
                            <Button htmlType="submit"  type="primary" >Login</Button>
                        </Form.Item>
                        
                    </Form>
                </Col>
                <Col className="gutter-row" span={6}>
                </Col>
         </Row>
        </div>
    )
}

export default Login
