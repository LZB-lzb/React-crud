import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
// withRouter为方法（驼峰命名的都为方法）

class Header extends Component {
  render() {
        // console.log(this.props)
        return (
      <div className="row">
        <div className="col-xs-offset-2 col-xs-8">
          <div className="page-header"><h2>React-Crud</h2></div>
        </div>
      </div>
    )
  }
}
// withRouter可以加工一般组件，让其拥有路由组件特有的api
export default withRouter(Header)
