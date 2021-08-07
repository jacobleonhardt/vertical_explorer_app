import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import ProfileButton from './ProfileButton'
import Logo from '../../images/vertical_explorer_logo-transparent.png'
import './nav.css'

export default function Navigation() {

    const user = useSelector(state => state.session.user)
    const showMenu = useState(false)

    const toggle = () => {
        showMenu = !showMenu
    }

    return (
        <div id='navbar'>
            <div className="right">
                <NavLink to="/"><img src={Logo} /></NavLink>
            </div>
            <div className="left">
            {user ?
                <>
                    <ProfileButton />
                    {showMenu ?
                        <>
                        <NavLink to='/climb'>Climb</NavLink>
                        <NavLink to='/settings'>Settings</NavLink>
                        </> :
                        <></>}
                </> :
                <>
                    <NavLink to="/login">Login</NavLink>
                    <NavLink to="/signup">Signup</NavLink>
                </>}
            </div>
        </div>
    )
}

// export default Navigation
