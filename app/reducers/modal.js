import { combineReducers } from 'redux'

const initialState = {
    modalType: null,
    modalProps: {}
}

const modal = (state = initialState, action) => {
    switch (action.type) {
        case 'SHOW_MODAL':
            return {
                modalType: action.modalType,
                modalProps: action.modalProps
            }
        case 'HIDE_MODAL':
            return initialState
        default:
            return state
    }
}

const modalReducer = combineReducers({
    modal
})

export default modalReducer