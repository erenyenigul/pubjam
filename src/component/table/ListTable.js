import React from 'react'
import { Button, Row, Col } from 'react-bootstrap'
import { connect } from 'react-redux'
import { startDeleteTable, startDequeueTrack, startLinkTrack } from '../../action/table'

const ListTable = (props) => {
    console.log(props.table);

    const deleteTableButtonHandler = (e, table_id) => {
        e.preventDefault();
        props.dispatch(startDeleteTable({table_id}));
    }

    const dequeueTrackButtonHandler = (e, table_id, entry_id) => {
        e.preventDefault();
        props.dispatch(startDequeueTrack({ table_id, entry_id }))
    }

    const linkTrackButtonHandler = (e, table_id, entry_id) => {
        e.preventDefault();
        props.dispatch(startLinkTrack({ table_id, entry_id }))
    }

    return (
        <div>
            {
                props.table?.map((table) => (
                    <div >
                        <div className="d-flex">
                            <h3>{table.name}</h3>
                            <Button onClick={(e) => deleteTableButtonHandler(e, table.table_id)}>x</Button>
                        </div>
                        <div className="p-3">
                            <p>Queue: </p>
                            <ul>
                                {table?.queue?.map(entry => (
                                    <li>
                                        <h4>{entry.name} </h4>
                                        <span>by </span>
                                        {entry.artists.map((artist)=><span>{artist} </span>)}
                                        <Button onClick={(e) => {e.preventDefault(); dequeueTrackButtonHandler(e, table.table_id, entry.entry_id)}}>x</Button>
                                        <Button onClick={(e) => { e.preventDefault();linkTrackButtonHandler(e, table.table_id, entry.entry_id)}}>queue</Button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

const mapStateToProps = (state) => ({
    dispatch: state.dispatch,
    table: state.table
});

export default connect(mapStateToProps)(ListTable)
