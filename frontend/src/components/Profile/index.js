import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { getUserClimbs } from '../../store/climbs'
import './Profile.css'

const Profile = ({ user }) => {
    const history = useHistory()
    const climbs = useSelector(state => state.climbs)
    let inMiles = user.total_climbed / 5280

    const addClimb = () => {
        history.push('/climbs')
    }

    useEffect(() => {
        getUserClimbs()
    }, [])

    return (
        <div className="profile">
            <div id="profile-info">
                <h2>{user.username}</h2>
                <h3>{ !user.total_climbed ? "Let's Climb!":
                <><i className="fas fa-mountain"></i> {user.total_climbed} "ft."
                {inMiles} mi.</>}</h3>
            </div>
            <div id="previous-climbs">
                { !climbs ?
                    <button className="nav-button" onClick={addClimb}>Add First Climb</button>
                : climbs.map(climb => {
                    return(
                    <div className="climb" key={climb.id}>
                        <h4>{climb.height}</h4>
                        <h4>{climb.difficulty}</h4>
                    </div>)})
                }
            </div>
        </div>
    )
}

export default Profile