import { combineForms } from 'react-redux-form'
import { v4 } from 'node-uuid'

const initialBookState = {
    id: v4(),
    category: '',
    title: '',
    author: '',
    year: ''
}

const formBook = combineForms({
    book: initialBookState,
})

export default formBook