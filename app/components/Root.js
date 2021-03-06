import React, { PropTypes } from 'react'
import { Provider } from 'react-redux'
import App from './App'
import { Router, Route, browserHistory } from 'react-router'

const Root = ({ store }) => (
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path='/(:category)' component={App} />
        </Router>
    </Provider>
)

Root.propTypes = {
    store: PropTypes.object.isRequired
}

export default Root