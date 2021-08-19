import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import Logout from '../Logout'
import Logo from '../../images/vertical_explorer_logo-transparent.png'
import './nav.css'

const Navigation = () => {
    const user = useSelector(state => state.session.user)
    const [showMenu, setShowMenu] = useState(false)

    const toggle = () => {
        setShowMenu(!showMenu)
    }

    return (
        <>
        {user ?
        <div id='navbar'>
            <div className="right">
                <NavLink to="/"><img id="logo" src={Logo} /></NavLink>
            </div>
            <div className="left">
                <div id="menu">
                    <button onClick={toggle} id="hamburger-menu">{showMenu ? <i className="fas fa-times"></i> : <i className="fas fa-bars"></i>}</button>
                    {showMenu ?
                        <div id="menu-links">
                            <NavLink to='/climb'>Climb</NavLink>
                            <NavLink to='/settings'>Settings</NavLink>
                            <Logout />
                        </div> :
                        <></>}
                </div>
            </div>
        </div>
        : <></>
        }
        </>
    )
}

export default Navigation
