import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom'
import MyNavLink from './components/MyNavLink'
import Header from './components/Header'
const Home = lazy(() => import('./containers/Home'))
const Add = lazy(() => import('./containers/Add'))
const Del = lazy(() => import('./containers/Del'))


class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">
              <MyNavLink to={{pathname:'/home',state:{}}}>主页</MyNavLink>
              <MyNavLink to={{pathname:'/add',state:{}}}>编辑 / 添加</MyNavLink>
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                <Suspense fallback={<h1>Loading...</h1>}>
                  <Switch>
                    <Route path="/home" component={Home} />
                    <Route path="/add" component={Add} />
                    <Route path="/del" component={Del} />
                  </Switch>
                </Suspense>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
