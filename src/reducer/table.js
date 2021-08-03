const tableDefaultState = [];

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = tableDefaultState, action) => {
    switch (action.type) {
        case 'SET_TABLES':
            return action.tables;
        case 'ADD_TABLE':
            return [...state, action.table];
        case 'DELETE_TABLE':
            return state.filter((table)=> table.table_id != action.table.table_id);
        case 'UPDATE_TABLE':
            return state.map((table)=>{
                if(table.table_id === action.table.table_id){
                    return {...table, ...action.table};
                }
                return table;
            });
        case 'DEQUEUE_TRACK':
            return state.map((table)=>{
                if(table.table_id === action.table.table_id){
                    return {...table, queue: table.queue.filter(({entry_id})=>(entry_id != action.table.queue[0].entry_id))}
                }
                else
                    return table;
            });
        default:
            return state;
    }
};