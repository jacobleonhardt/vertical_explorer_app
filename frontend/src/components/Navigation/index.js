import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { login } from '../../store/session'
import Logout from '../Logout'
import Logo from '../../images/vertical_explorer_logo-transparent.png'
import './nav.css'

const Navigation = () => {
    const dispatch = useDispatch()

    const user = useSelector(state => state.session.user)
    const [showMenu, setShowMenu] = useState(false)

    const toggle = () => {
        setShowMenu(!showMenu)
    }

    const loginDemo = () => {
        return dispatch(login({ credential: 'Demo', password: 'password' }))
    }

    return (
        <div id='navbar'>
            <div className="right">
                <NavLink to="/"><img id="logo" src={Logo} /></NavLink>
            </div>
            <div className="left">
            {user ?
                <div id="menu">
                    <button onClick={toggle} id="hamburger-menu">{showMenu ? <i class="fas fa-times"></i> : <i class="fas fa-bars"></i>}</button>
                    {showMenu ?
                        <div id="menu-links">
                            <NavLink to='/climb'>Climb</NavLink>
                            <NavLink to='/settings'>Settings</NavLink>
                            <Logout />
                        </div> :
                        <></>}
                </div> :
                <>
                    <NavLink to="/login">Login</NavLink>
                    <NavLink to="/signup">Signup</NavLink>
                    <button className='nav-button' onClick={loginDemo}>Demo</button>
                </>}
            </div>
        </div>
    )
}

export default Navigation
