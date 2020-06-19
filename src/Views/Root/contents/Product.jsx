import React from "react";
import { Row, Col, Button, Card, Avatar, PageHeader, Modal, Form, Upload, Select, Input } from 'antd';
import { PlusSquareOutlined, EditOutlined, EllipsisOutlined, SettingOutlined, UploadOutlined } from "@ant-design/icons";

import products from "./products";

const { Meta } = Card;
const { Option } = Select;

class Product extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            modalVisible: false
        }
        this.submitBtnClicked = this.submitBtnClicked.bind(this)
        this.cancelBtnClicked = this.cancelBtnClicked.bind(this)
        this.showModal = this.showModal.bind(this)
    }

    showModal() {
        this.setState({
            modalVisible: true
        })
    }

    submitBtnClicked() {
        this.setState({
            modalVisible: false
        })
    }

    cancelBtnClicked() {
        this.setState({
            modalVisible: false
        })
    }

    render() {
        const { modalVisible } = this.state
        return (
            <div>
                <Row>
                    <Col span={24}>
                        <PageHeader
                            ghost={false}
                            onBack={() => window.history.back()}
                            title="Title"
                            subTitle="This is a subtitle"
                            extra={[
                                <Button icon={< PlusSquareOutlined />} key="1" type="primary" onClick={this.showModal}>
                                    New Product
                            </Button>
                            ]}
                        ></PageHeader>
                        <FormNewProduct
                            title="Add New Product"
                            visible={modalVisible}
                            onOk={this.submitBtnClicked}
                            onCancel={this.cancelBtnClicked}
                        />
                    </Col>
                </Row>
                <ProductList />
            </div>
        )
    }
}

function ProductList() {
    const colStyle = {
        padding: '8px'
    }

    const data = products.map(item =>
        <Col span={6} style={colStyle} key={item.id}>
            <Card
                cover={
                    <img
                        alt="example"
                        src={item.cover}
                    />
                }
                actions={[
                    <SettingOutlined key="setting" />,
                    <EditOutlined key="edit" />,
                    <EllipsisOutlined key="ellipsis" />,
                ]}
            >
                <Meta
                    avatar={<Avatar src={item.avatar} />}
                    title={item.title}
                    description={item.description}
                />
            </Card>
        </Col>
    )

    return (
        <Row className="row-pad">
            {data}
        </Row>
    )
}

function FormNewProduct(props) {
    const formlayout = 'vertical'
    return (
        <Modal
            title={props.title}
            visible={props.visible}
            onOk={props.onOk}
            onCancel={props.onCancel}
        >
            <Form
                layout={ formlayout }
                initialValues={{ layout: formlayout }}
            >
                <Form.Item label="Choose the best picture as thumbnail in menus display">
                    <Upload name="logo" listType="picture">
                        <Button>
                            <UploadOutlined /> Click to upload
                        </Button>
                    </Upload>
                </Form.Item>
                <Form.Item label="Select menu category to distinguish customer selected">
                    <Select placeholder="Select Catagory">
                        <Option value="Minuman">Minuman</Option>
                        <Option value="Makanan">Makanan</Option>
                    </Select>
                </Form.Item>
                <Form.Item label="Input product name do you want">
                    <Input placeholder="Input Product Name" />
                </Form.Item>
            </Form>
        </Modal>
    )
}


export default Product
