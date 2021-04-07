import React, { Component } from 'react'
import { Table, Space } from 'antd';
import axios from 'axios'
import { connect } from 'react-redux'
import { Person } from '../../redux/actions/user'
import 'antd/dist/antd.css'

const columns = [
    {
        title: '姓名',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: '年龄',
        dataIndex: 'age',
        key: 'age',
    },
    {
        title: '地址',
        dataIndex: 'address',
        key: 'address',
    },
    {
        title: '操作',
        key: 'action',
        render: (record) => (
            <Space size="middle">
                <a href={`/add?id=${record.key}`}>编辑</a>
                <a href={`/del?id=${record.key}`}>删除</a>
            </Space>
        ),
    },
];

class Home extends Component {
    componentDidMount() {
        axios.get(`http://localhost:3004/user`).then(
            res => {
                // console.log(res.data)
                this.props.Person(res.data)
            },
            err => {
                console.log(err)
            }
        )
    }
    render() {
        // console.log(this.props)
        const { user } = this.props
        return (
            <div>
                <div>
                    <Table columns={columns} dataSource={user} key={user.key} />
                </div>
            </div>
        )
    }
}
export default connect(
    state => {
        return {
            user: state.user
        }
    },
    // 简写(react-redux自动调用dispatch)
    {
        Person
    }
)(Home)