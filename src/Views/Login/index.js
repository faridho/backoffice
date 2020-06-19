import React from "react";
import "./Login.css";

import { Layout, Row, Col, Form, Input, Button, Card } from 'antd';
const { Content } = Layout;

class Login extends React.Component {
    render() {
        return (
            <Content className="login">
                <Row>
                    <Col span={6} offset={10}>
                        <div className="site-card-border-less-wrapper">
                            <Card title="Login" bordered={false}>
                                <Form>
                                    <Form.Item
                                        name="username"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please input your username!',
                                            },
                                        ]}
                                    >
                                        <Input placeholder="Username" />
                                    </Form.Item>

                                    <Form.Item
                                        name="password"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please input your password!',
                                            },
                                        ]}
                                    >
                                        <Input.Password placeholder="Password" />
                                    </Form.Item>

                                    <Form.Item >
                                        <Button type="primary" >
                                            Submit
                                        </Button>
                                    </Form.Item>
                                </Form>
                            </Card>
                        </div>
                    </Col>
                </Row>
            </Content>
        )
    }
}

export default Login