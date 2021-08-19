import React from 'react'
import { useSelector } from 'react-redux'
import './Profile.css'

const Profile = ({ user }) => {

    let inMiles = user.total_climbed / 5280
    const climbs = useSelector(state => state.climbs)

    return (
        <div className="profile">
            <div id="profile-info">
                <h2>{user.username}</h2>
                <h3>{ !user.total_climbed ? "Let's Climb!":
                <><i className="fas fa-mountain"></i> {user.total_climbed} "ft."
                {inMiles} mi.</>}</h3>
            </div>
            <div id="previous-climbs">

            </div>
        </div>
    )
}

export default Profile
