import React from 'react'
import { connect } from 'react-redux'

export const Profile = (props) => {
    return (
        <div className="container">
            <h2>Profile</h2>
            <p>Welcome {props.user.display_name}</p>
            <ul>
                <li></li>
            </ul>
        </div>
    )
}

const mapStateToProps = (state) => ({
    user: state.user
})


export default connect(mapStateToProps)(Profile)
