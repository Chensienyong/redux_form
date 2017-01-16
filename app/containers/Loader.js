import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'
import * as BookSelector from '../reducers/books'
import LoaderComp from '../components/LoaderComp'

class Loader extends Component {
    render() {
        const { isFetching } = this.props
        if (isFetching)
            return <LoaderComp />
        else
            return false
    }
}

const mapStatetoLoaderProps = (state) => ({
    isFetching: BookSelector.getIsFetching(state),
})

Loader = connect(
    mapStatetoLoaderProps,
    actions
)(Loader)

export default Loader