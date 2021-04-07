import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'

class About extends Component {
    componentDidMount() {
        if (!window.confirm('确定要删除该用户吗？')) return this.props.history.push('/home')
        // console.log(this.props.user)
        // console.log(this.props.location.search.slice(4))
        const { user, location } = this.props
        let i = location.search.slice(4) * 1
        if (!i) return this.props.history.push('/home')
        let { key } = user[i - 1]
        axios.delete(`http://localhost:3004/user/${key}`).then(
            res => {
                console.log(res.data)
            },
            err => {
                console.log(err)
            }
        )
        return this.props.history.push('/home')
    }
    render() {
        // console.log(this.props)
        return (
            <div>

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
    {}
)(About)