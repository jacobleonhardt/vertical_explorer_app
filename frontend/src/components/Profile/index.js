import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { getUserClimbs, deletePrevClimb } from '../../store/climbs'
import PrevClimbs from '../PrevClimbs/index'
import './Profile.css'

const Profile = ({ user }) => {
    const history = useHistory()
    const dispatch = useDispatch()
    const climbs = useSelector(state => state.climbs)
    let inMiles = (user.total_climbed / 5280).toFixed(2)

    const addClimb = () => {
        history.push('/climb')
    }

    useEffect(() => {
        dispatch(getUserClimbs())
    }, [])

    return (
        <div className="profile">
            <div id="profile-info">
                <h2>{user.username}</h2>
                <div id="distance">{ user.total_climbed == 0 ? "Let's Climb!":
                <><h2 id="feet"><i className="fas fa-mountain"></i> {user.total_climbed} ft.</h2>
                <h3 id="miles"><i class="fas fa-route"></i> {inMiles} mi.</h3></>}</div>
            </div>
            <div id="previous-climbs">
                <h3>Previous Climbs</h3>
                { !climbs ?
                    <button className="nav-button" onClick={addClimb}>Add First Climb</button>
                : climbs.map(climb => {
                    return(<PrevClimbs climb={climb} user={user} key={climb.id} />)})
                }
            </div>
        </div>
    )
}

export default Profile
