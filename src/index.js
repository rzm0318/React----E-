/*入口js*/
import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter, Route, Switch} from 'react-router-dom'


import App from './containers/app/app'

//渲染标签到页面
ReactDOM.render((
    <BrowserRouter>
      <Switch>
        <Route component={App} />
      </Switch>
    </BrowserRouter>

),document.getElementById("root"))