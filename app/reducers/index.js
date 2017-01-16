import { combineReducers } from 'redux'
import books from './books'
import formBook from './formBook'

const booksApp = combineReducers({
    books,
    formBook,
})

export default booksApp