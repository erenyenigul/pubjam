const userDefaultState = {
    authenticated: false,
    access_token: undefined
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = userDefaultState, action) => {
    switch (action.type) {
        case 'SET_USER':
            return {...state, authenticated: true, ...action.user}
        case 'UPDATE_USER':
            return {...state, ...action.user};
        case 'DELETE_USER':
            return userDefaultState;
        default:
            return state;
    }
};