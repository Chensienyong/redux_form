import React from 'react'
import BookTable from '../containers/BookTable'
import FilterWell from '../containers/FilterWell'
import Loader from '../containers/Loader'

const App = () => (
    <div className="container">
        <Loader />
        <FilterWell />
        <BookTable />
    </div>
)

export default App