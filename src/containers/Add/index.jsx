import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { addPerson, Person } from '../../redux/actions/user'

class About extends Component {
    componentDidMount() {
        // console.log(this.props.location.search.slice(4))
        axios.get(`http://localhost:3004/user`).then(
            res => {
                this.props.Person(res.data)
                // console.log(this.props.user)
                const { user, location } = this.props
                let i = location.search.slice(4) * 1
                if (!i) return
                let { ip1, ip2, ip3 } = this
                let { name, age, address } = user[i - 1]
                ip1.value = name
                ip2.value = age
                ip3.value = address
            },
            err => {
                const { user, location } = this.props
                let i = location.search.slice(4) * 1
                if (!i) return
                let { ip1, ip2, ip3 } = this
                let { name, age, address } = user[i - 1]
                ip1.value = name
                ip2.value = age
                ip3.value = address
                console.log(err)
            }
        )
    }
    edit = () => {
        let { ip1, ip2, ip3 } = this
        let name = ip1.value
        let age = ip2.value * 1
        let address = ip3.value
        if (!name || !age || !address) return
        const personObj = { name, age, key: this.props.user.length + 1, address }
        console.log(personObj)
        this.props.addPerson(personObj)
        ip1.value = ip2.value = ip3.value = ''
    }
    backhome = () => {
        this.props.history.push('/home')
    }
    render() {
        // console.log(this.props)
        return (
            <div>
                <input type="text" placeholder="请输入用户名字" ref={i => this.ip1 = i} />
                <hr />
                <input type="text" placeholder="请输入用户年龄" ref={i => this.ip2 = i} />
                <hr />
                <input type="text" placeholder="请输入用户地址" ref={i => this.ip3 = i} />
                <hr />
                <button onClick={this.edit}>确认编辑</button>&nbsp;
                <button onClick={this.backhome}>取消编辑</button>
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
        addPerson,
        Person
    }
)(About)