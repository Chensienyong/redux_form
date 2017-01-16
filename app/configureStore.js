import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import apiMiddleware from './middlewares/apiMiddleware'
import booksApp from './reducers'
import { combineForms } from 'react-redux-form'

const configureStore = () => {
    const middlewares = [thunk,apiMiddleware]

    if (process.env.NODE_ENV !== 'production') {
        middlewares.push(createLogger())
    }

    return createStore(
        booksApp,
        window.devToolsExtension && window.devToolsExtension(),
        applyMiddleware(...middlewares)
    )
}

export default configureStore