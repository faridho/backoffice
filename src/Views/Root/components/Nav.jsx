import React from 'react'
import { Layout } from 'antd'

const { Header } = Layout

class Nav extends React.Component {
    render() {
        return (
            <Header className="header">
                <div className="logo" />
            </Header>
        )
    }
}

export default Nav