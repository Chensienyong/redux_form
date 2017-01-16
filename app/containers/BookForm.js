import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Control, Form, actions, Field } from 'react-redux-form'
import * as fromActions from '../actions'
import * as BookSelector from '../reducers/books'
import _ from 'lodash'
import { withRouter } from 'react-router'

class BookForm extends Component {
    handleSubmit(book) {
        const { addBook, category } = this.props
        addBook(book.book, category)
    }

    render() {
        const { allCategory } = this.props
        const toYear = (value) => parseInt(value) || 0
        return (
            <div className="modal fade" tabIndex="-1" role="dialog">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                            <h4 className="modal-title">Add Book</h4>
                        </div>
                        <div className="modal-body">
                            <Form model="formBook" className="form-horizontal"
                                onSubmit={(book) => this.handleSubmit(book)}>
                                <div className="form-group">
                                    <label htmlFor="formTitle" className="col-sm-2 control-label">Title</label>
                                    <div className="col-sm-4">
                                        <Control.text model="book.title"  className="form-control" id="formTitle" placeholder="Title" required/>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="formAuthor" className="col-sm-2 control-label">Author</label>
                                    <div className="col-sm-4">
                                        <Control.text model="book.author"  className="form-control" id="formAuthor" placeholder="Author" required/>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="formYear" className="col-sm-2 control-label">Year</label>
                                    <div className="col-sm-4">
                                        <Control.text type="number" model="book.year"  className="form-control" id="formYear" placeholder="0" parser={ toYear } required/>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="formCategory" className="col-sm-2 control-label">Category</label>
                                    <div className="col-sm-4">
                                        <Control.select model="book.category" defaultValue="" className="form-control" id="formCategory" required>
                                            <option value="" disabled>Select Category</option>
                                            {_.map(allCategory, (category) => (
                                                <option value={category.id} key={category.id}>{category.name}</option>
                                            ))}
                                        </Control.select>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <div className="col-sm-offset-2 col-sm-10">
                                        <button type="submit" className="btn btn-default"><span className="glyphicon glyphicon-plus-sign" aria-hidden="true"></span> Add</button>
                                    </div>
                                </div>
                            </Form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStatetoBooksProps = (state, { params }) => {
    const category = params.category || 'All'
    return {
        allCategory: BookSelector.getCategories(state),
        category
    }
}

BookForm = withRouter(connect(
    mapStatetoBooksProps,
    fromActions
)(BookForm))

export default BookForm