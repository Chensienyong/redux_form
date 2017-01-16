import { v4 } from 'node-uuid'
import _ from 'lodash'
import Immutable from 'immutable'

const data = {
    books: [{
        id: v4(),
        category: 1,
        title: 'The Great Gatsby',
        author: 'James Butt',
        year: 2010,
    }, {
        id: v4(),
        category: 2,
        title: 'Ulysses',
        author: 'Anthony Poleman',
        year: 2000
    }, {
        id: v4(),
        category: 2,
        title: 'The Grapes Of Wrath',
        author: 'J.K Rowling',
        year: 1999
    }, {
        id: v4(),
        category: 3,
        title: 'Lolita',
        author: 'Kappa Pride',
        year: 2016
    }, {
        id: v4(),
        category: 1,
        title: 'Catch 22',
        author: 'Legend 27',
        year: 1980
    }, {
        id: v4(),
        category: 2,
        title: 'Beloved',
        author: 'Emilia Clarke',
        year: 1994
    }],
    categories: [{
        id: 1,
        name: 'Fiction'
    }, {
        id: 2,
        name: 'Non Fiction'
    }, {
        id: 3,
        name: 'Romance'
    }]
}

export const fetchBooksWithCategory = (cat) => {
    let books = data.books, category
    if (cat != 'All') {
        category = _.find(data.categories, (category) => cat == category.name)
        books = _.filter(books, (book) => book.category == category.id)
    }

    return _.map(books, (book) => {
        return Object.assign({}, book, {
            category: _.find(data.categories, (category) => category.id == book.category)
        })
    })
}

export const fetchCategories = () => {
    let categories = [
        ...data.categories
    ]
    return categories
}

export const addBook = (book) => {
    let category
    data.books.push(book)
    category = _.find(data.categories, (category) => book.category == category.id)
    return Object.assign({}, book, {
        category
    })
}