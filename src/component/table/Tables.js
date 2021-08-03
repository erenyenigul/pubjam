import React from 'react'
import AddTable from './AddTable';
import ListTable from './ListTable';

const Tables = () => {
    return (
        <div className="container">
            <h2>Tables</h2>
            <ListTable/>
            <AddTable/>
        </div>
    )
}

export default Tables;
