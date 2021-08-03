import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;
const endpoint = (path) => `${API_URL}${path}`;

export const getUser = async (accessToken) => {
    const result = await axios.post(
        endpoint('/login'),
        {
            access_token: accessToken
        }
    );

    return result.data;
}

export const getTables = async (accessToken) => {
    const result = await axios.get(
        endpoint('/table'),
        {
            headers: {
                'Authorization': `Bearer ${accessToken}`
            }
    }
    );
    return result.data;
}

export const addTable = async (accessToken, { name }) => {
    const result = await axios.post(
        endpoint('/table'),
        {
            name
        },
        {
            headers: {
                'Authorization': `Bearer ${accessToken}`
            }
        }
    );

    return result.data;
}

export const deleteTable = async (accessToken, { table_id }) => {
    const result = await axios.delete(
        endpoint('/table'),
        {
            data: {
                table_id
            },
            headers: {
                'Authorization': `Bearer ${accessToken}`
            }
        }
    );

    return result.data;
}

export const updateTable = async (accessToken, { table_id, name }) => {
    const result = await axios.patch(
        endpoint('/table'), {
        table_id, name
        },
        {
            headers: {
                'Authorization': `Bearer ${accessToken}`
            }
        }
    );

    return result.data;
}

export const deleteTrack = async (accessToken, { table_id, entry_id }) => {
    const result = await axios.request({
        url: endpoint('/queue'),
        method: 'delete',
        data: { entry_id , table_id},
        headers: {
            'Authorization': `Bearer ${accessToken}`
        }
    }
    );
    
    return result.data;
}

export const linkTrack = async (accessToken, { table_id, entry_id }) => {
    const result = await axios.request({
        url: endpoint('/queue'),
        method: 'link',
        data: {entry_id, table_id},
        headers: {
            'Authorization': `Bearer ${accessToken}`
        }
    }
    );

    return result.data;
}

export const getAccessToken = async () => {
    const result = await axios.request({
        url: endpoint('/token'),
        method: 'get',
    });

    return result.data;
}

export const searchTrack = async (accessToken, name) => {
    const result = await axios.request({
        url: `https://api.spotify.com/v1/search?q=${name}&type=track&limit=10`,
        method: 'get',
        headers: {
            'Authorization': `Bearer ${accessToken}`
        }
    });
    console.log(result.data.tracks.items)
    return result.data.tracks.items;
}