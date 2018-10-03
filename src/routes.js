import React from 'react'
import { Switch, Router, Route } from 'react-router-dom'
import './stylesheets/ui.scss'
import './stylesheets/index.scss'
import  { Left, Right, Whoops404  } from './components'
import createBrowserHistory from 'history/createBrowserHistory'
import { App } from './components/App'

const history = createBrowserHistory()

const routes = (
    <Router history={history}>
    <Switch>
      <Route path="/" component={App} />
      <Route path="list-days" component={App} />
      <Route path=":filter" component={App} />
      <Route path="add-day" component={App} />
      <Route path="pokeHome" component={App} />
      <Route component={Whoops404} />
    </Switch>
    </Router>
)

export default routes
