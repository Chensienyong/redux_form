import React, { Component } from 'react'
import BookForm from './BookForm'
import { connect } from 'react-redux'

const MODAL_COMPONENTS = {
    'ADD_BOOK': BookForm,
}

const ModalRoot = ({ modalType, modalProps }) => {
    console.log(modalType)
    if (!modalType) {
        return null
    }

    const SpecificModal = MODAL_COMPONENTS[modalType]
    return <SpecificModal {...modalProps} />
}

export default connect(
    state => state.modal.modal
)(ModalRoot)