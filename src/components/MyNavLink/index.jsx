import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class MyNavLink extends Component {
    render() {
        // const {}=this.props
        // console.log({...this.props})
        return (
            <NavLink activeClassName="myactive" style={{width:'10vw',textAlign:'center'}} className="list-group-item" {...this.props}/>
        )
    }
}
