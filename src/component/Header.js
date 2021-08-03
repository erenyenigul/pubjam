import React from 'react';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import { NavLink } from 'react-router-dom';

import './style/Header.scss';

const Header = () => {
    return (
        <header>
            <h1>PubJam</h1>
            <NavLink to="/" className="btn" activeClassName="btn-primary" exact>Home</NavLink>
            <NavLink to="/table" className="btn"  activeClassName="btn-primary" exact>Tables</NavLink>
            <NavLink to="/profile" className="btn" activeClassName="btn-primary" exact>Profile</NavLink>
            <NavLink to="/login" className="btn btn-primary" exact>Login</NavLink>

        </header>
    )
}

export default Header
