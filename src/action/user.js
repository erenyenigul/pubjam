import { getAccessToken, getUser } from "../request/main";

export const setUser = (user) => ({
    type: 'SET_USER',
    user
});

export const updateUser = (user) => ({
    type: 'UPDATE_USER',
    user
});

export const deleteUser = () => ({
    type: 'DELETE_USER'
});

export const startSetUser =  (accessToken) => {
    return  async (dispatch) => {
        if (accessToken) {
            const user = await getUser(accessToken);
            dispatch(setUser({ ...user, access_token: accessToken }));
        }else{
            const user = await getAccessToken();
            dispatch(setUser({ ...user}));
        }
        
    }   
}
