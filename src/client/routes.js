import { Route, Router, browserHistory} from 'react-router'
import React from 'react'
import App from './containers/App'

export default (
    <Router history={browserHistory}>
        <Route path="/" component={App} />
    </Router>
)