import React, { PropTypes } from 'react'
import _ from 'lodash'
import { Link } from 'react-router'
import { Control, Form, actions, Field } from 'react-redux-form'

const FilterList = ({ categories, category, categoriesForm, toYear, handleSubmit }) => (
    <nav className="navbar navbar-default">
        <div className="container-fluid">
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav">
                    <li><a href="#" data-toggle="modal" data-target="#myModal"><span className="glyphicon glyphicon-plus-sign" aria-hidden="true"></span> Add Book</a></li>
                </ul>
                <ul className="nav navbar-nav navbar-right">
                    <li className="dropdown">
                        <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Category <span className="caret"></span></a>
                        <ul className="dropdown-menu">
                            {_.map(categories, (cat) => (
                                <li key={cat.id} className={category === cat.name ? 'active' : ''}>
                                    <Link
                                        to={cat.name === 'All' ? '' : cat.name}
                                        activeClassName = 'active'
                                    >
                                        {cat.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
        <div className="modal fade" id="myModal" tabIndex="-1" role="dialog">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <Form model="formBook" className="form-horizontal"
                            onSubmit={(book) => handleSubmit(book)}>
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                            <h4 className="modal-title">Add Book</h4>
                        </div>
                        <div className="modal-body">
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
                                        {_.map(categoriesForm, (category) => (
                                            <option value={category.id} key={category.id}>{category.name}</option>
                                        ))}
                                    </Control.select>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="submit" className="btn btn-success"><span className="glyphicon glyphicon-plus-sign" aria-hidden="true"></span> Add</button>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    </nav>
)

export default FilterList