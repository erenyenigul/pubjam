import React, { useEffect } from 'react'
import { useLocation } from 'react-router';
import { Redirect as Redirector } from 'react-router-dom';
import { startSetUser } from '../../action/user';
import { connect } from 'react-redux';

const useAccessToken = () => {
    const location = new URLSearchParams(useLocation().hash.substr(1));
    const accessToken = location.get('access_token') || undefined;

    return accessToken;
}

const Redirect = (props) => {
    const accessToken = useAccessToken();

    useEffect(() => {
        props.startSetUser(accessToken);
    }, []);

    return (
        <div>
            {!accessToken &&
                <Redirector to="/home"></Redirector>
            }
        </div>
    )
}


const mapDispatchToProps = (dispatch) => ({
    startSetUser: (accessToken) => dispatch(startSetUser(accessToken))
});

export default connect(undefined, mapDispatchToProps)(Redirect);