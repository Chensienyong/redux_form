import React, { PropTypes } from 'react'
import _ from 'lodash'

const BookList = ({ books }) => (
    <table className="table table-striped">
        <thead>
            <tr>
                <th>No.</th>
                <th>Title</th>
                <th>Author</th>
                <th>Year</th>
                <th>Category</th>
            </tr>
        </thead>
        <tbody>
            {_.map(books, (value, key) => {
                return (
                    <tr key={ key }>
                        <td>{key+1}</td>
                        <td>{value.title}</td>
                        <td>{value.author}</td>
                        <td>{value.year}</td>
                        <td>{value.category.name}</td>
                    </tr>
                )
            })}
        </tbody>
    </table>
)

BookList.propTypes = {
    books: PropTypes.arrayOf(PropTypes.shape({
        author: PropTypes.string.isRequired,
        category: PropTypes.object.isRequired,
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        year: PropTypes.number.isRequired,
    }).isRequired),
}

export default BookList