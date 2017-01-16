import { combineReducers } from 'redux'

const allBooks = (state = [], action) => {
    switch (action.type) {
        case 'FETCH_BOOKS_SUCCESS':
            return action.data
        case 'ADD_BOOK_SUCCESS':
            return (action.categoryFilter === 'All' || action.categoryFilter === action.data.category.name) ?
                [...state, action.data] :
                state
        default:
            return state
    }
}

const isFetching = (state = false, action) => {
    switch (action.type) {
        case 'FETCH_BOOKS_REQUEST':
        case 'FETCH_CATEGORIES_REQUEST':
        case 'ADD_BOOK_REQUEST':
            return true
        case 'FETCH_BOOKS_SUCCESS':
        case 'ADD_BOOK_SUCCESS':
            return false
        default:
            return state
    }
}

const allCategories = (state = [], action) => {
    switch (action.type) {
        case 'FETCH_CATEGORIES_SUCCESS':
            return action.data
        default:
            return state
    }
}

const books = combineReducers({
    allBooks,
    isFetching,
    allCategories
})

export default books

export const getBooks = (state) => state.books.allBooks
export const getCategories = (state) => state.books.allCategories
export const getIsFetching = (state) => state.books.isFetching