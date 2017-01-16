import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'
import * as BookSelector from '../reducers/books'
import BookList from '../components/BookList'
import { withRouter } from 'react-router'

class BookTable extends Component {
    componentDidMount() {
        this.fetchData()
    }

    componentDidUpdate(prevProps) {
        if(this.props.category !== prevProps.category) {
            this.fetchData()
        }
    }

    fetchData() {
        const { category, fetchBooksWithCategory } = this.props
        fetchBooksWithCategory(category)
    }

    render() {
        const { allBooks } = this.props
        return <BookList
                books={ allBooks }
                />
    }
}

const mapStatetoBooksProps = (state, { params }) => {
    const category = params.category || 'All'
    return {
        allBooks: BookSelector.getBooks(state),
        category
    }
}

BookTable = withRouter(connect(
    mapStatetoBooksProps,
    actions
)(BookTable))

export default BookTable