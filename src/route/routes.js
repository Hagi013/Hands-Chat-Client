/**
 * Created by shuhei.hagiwara on 2017/06/14.
 */

import React from 'react'
import {Route} from 'react-router-dom'
import Timeline from '../component/Timeline'
import Channle from '../component/RegisterChannel'

export const routes = [
  {
    path: '/',
    component: Timeline
  },
  {
    path: '/channel',
    component: Channle
  }
]

export const RouteWithSubRoutes = (route) => (
  <Route path={route.path} render={props => (
    <route.component {...props} routes={route.routes} />
  )}/>
)
