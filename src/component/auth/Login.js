import React, {useEffect} from "react";

const Login = () => {
    useEffect(() => {
        const scopes = [
            "user-read-currently-playing",
            "user-read-playback-state",
        ];
        window.location.href = `${process.env.REACT_APP_SPOTIFY_AUTH_URL}?client_id=${process.env.REACT_APP_SPOTIFY_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_SPOTIFY_REDIRECT_URL}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;
    }, [])

    return null; 
};

export default Login;
