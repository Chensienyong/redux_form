import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'
import FilterList from '../components/FilterList'
import * as BookSelector from '../reducers/books'
import { withRouter } from 'react-router'

class FilterWell extends Component {
    handleSubmit(book) {
        const { addBook, category } = this.props
        addBook(book.book, category)
    }

    componentDidMount() {
        this.fetchData()
    }

    fetchData() {
        const { fetchCategories } = this.props
        fetchCategories()
    }

    render() {
        const { category, allCategory } = this.props
        const toYear = (value) => parseInt(value) || 0
        return <FilterList
                categories={[{ id: 0, name: 'All' },...allCategory]}
                category={category || 'All'}
                categoriesForm={allCategory}
                toYear={toYear}
                handleSubmit={(book) => this.handleSubmit(book)}
                />
    }
}

const mapStatetoFilterProps = (state, { params }) => {
    const category = params.category || 'All'
    return {
        allCategory: BookSelector.getCategories(state),
        category
    }
}

FilterWell = withRouter(connect(
    mapStatetoFilterProps,
    actions
)(FilterWell))

export default FilterWell