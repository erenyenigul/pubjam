import React, {useState} from 'react'
import { connect } from 'react-redux'
import { Form, Button } from 'react-bootstrap';
import {startAddTable, startSetTables } from '../../action/table';

const AddTable = (props) => {
    const [tableName, setTableName] = useState('');

    const onRefreshButtonClick = (e) => {
        e.preventDefault();
        props.dispatch(startSetTables());
    }

    const onTableNameInputChange = (e) => {
        e.preventDefault();
        setTableName(e.target.value);
    }

    const onAddButtonClick = (e) => {
        e.preventDefault();
        props.dispatch(startAddTable({ name: e.target.form.name.value }))
    };

    return (
        <div className="w-50">
            <Form onSubmit={(e)=>e.preventDefault()}>
                <Form.Group className="mb-3" >
                    <Form.Label>Table Name</Form.Label>
                    <Form.Control type="text" name="name" placeholder="Enter table name" onChange={onTableNameInputChange} autoComplete="off"/>
                    <Button variant="primary" onClick={onAddButtonClick} disabled={!tableName}>
                        Add
                    </Button>
                    <Button variant="success" onClick={onRefreshButtonClick} >
                        Refresh
                    </Button>
                </Form.Group>

            </Form>
        </div>
    )
}

const mapStateToProps = (state) => ({
    dispatch: state.dispatch
});

export default connect(mapStateToProps)(AddTable);
