export const fetchBooksWithCategory = (category) => ({
    type: 'FETCH_BOOKS_REQUEST',
    category
})

export const fetchCategories = () => ({
    type: 'FETCH_CATEGORIES_REQUEST'
})

export const addBook = (book, category) => ({
    type: 'ADD_BOOK_REQUEST',
    book,
    category
})

export const showModal = () => ({
    type: 'SHOW_MODAL',
    modalType: 'ADD_BOOK',
    modalProps: {
        postId: 42
    }
})