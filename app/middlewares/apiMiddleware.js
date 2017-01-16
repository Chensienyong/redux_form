import * as api from '../api'

const delay = (ms) =>
    new Promise(resolve => setTimeout(resolve, ms))

const apiMiddleware  = store => next => action => {
    if (action.type === 'FETCH_BOOKS_REQUEST') {
        delay(2000).then(() =>
            api.fetchBooksWithCategory(action.category)
        ).then((data) =>
            store.dispatch({
                type: 'FETCH_BOOKS_SUCCESS',
                data,
            })
        )
        // new Promise(
        //     (resolve) => resolve(api.fetchBooksWithCategory())
        // ).then((data) =>
        //     store.dispatch({
        //         type: 'FETCH_BOOKS_SUCCESS',
        //         data,
        //     })
        // )
    } else if (action.type === 'FETCH_CATEGORIES_REQUEST') {
        delay(2000).then(() =>
            api.fetchCategories()
        ).then((data) =>
            store.dispatch({
                type: 'FETCH_CATEGORIES_SUCCESS',
                data,
            })
        )
    } else if (action.type === 'ADD_BOOK_REQUEST') {
        delay(1000).then(() =>
            api.addBook(action.book)
        ).then((data) => {
            let categoryFilter = action.category
            return store.dispatch({
                type: 'ADD_BOOK_SUCCESS',
                data,
                categoryFilter,
            })
        }
        )
    }
    next(action)
}

export default apiMiddleware