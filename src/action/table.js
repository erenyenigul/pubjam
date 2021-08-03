import {ObjectId} from 'bson';
import * as api from '../request/main';
import { startSetUser } from './user';

import {store} from '../index';

export const setTables = (tables) => ({
    type: 'SET_TABLES',
    tables
});

export const addTable = (table) => ({
    type: 'ADD_TABLE',
    table
});

export const deleteTable = ({table_id}) => ({
    type: 'DELETE_TABLE',
    table: {
        table_id
    }
});

export const updateTable = (table) => ({
    type: 'UPDATE_TABLE',
    table
});

export const dequeueTrack = ({table_id, entry_id}) => ({
    type: 'DEQUEUE_TRACK',
    table: {
        table_id,
        queue: [{entry_id}]
    }
}); 

export const enqueueTrack = ({ table_id, entry_id }) => ({
    type: 'ENQUEUE_TRACK',
    table: {
        table_id,
        queue: [{entry_id}]
    }
});

export const startSetTables = () => {
    return async (dispatch) => {
        const accessToken = store.getState().user.access_token;

        const tables = await api.getTables(accessToken);
        dispatch(setTables(tables));
    };
};

export const startAddTable = ({name}) => {
    return async (dispatch) => {
        const accessToken = store.getState().user.access_token;

        const table = await api.addTable(accessToken, {name});
        dispatch(addTable(table));
    };
};

export const startDeleteTable = ({table_id}) => {
    return async (dispatch) => {
        console.log(table_id);
        const accessToken = store.getState().user.access_token;

        await api.deleteTable(accessToken, {table_id});
        dispatch(deleteTable({table_id}));
    };
};

export const startDequeueTrack = ({ table_id, entry_id }) => {
    return async (dispatch) => {
        console.log(table_id);
        const accessToken = store.getState().user.access_token;

        await api.deleteTrack(accessToken, { table_id, entry_id });
        dispatch(dequeueTrack({ entry_id, table_id }));
    };
};


export const startLinkTrack = ({ table_id, entry_id }) => {
    return async (dispatch) => {
        const accessToken = store.getState().user.access_token;

        await api.linkTrack(accessToken, { table_id, entry_id });
        dispatch(dequeueTrack({ entry_id, table_id }));
    };
};