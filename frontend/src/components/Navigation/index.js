import React, { useState } from 'react'
import { Navlink } from 'react-redux'
import ProfileButton from './profilebutton'
import Logo from '../../../public/vertical_explorer_logo-transparent.png'
import 'nav.css'


const Nav = () => {

    const user = useState(state => state.session.user)

    return (
        <div id='navbar'>
            <div className="right">
                <Navlink to="/">{Logo}</Navlink>
            </div>
            <div className="left">
            {user ?
            <>
                <Navlink>Climbs</Navlink>
                <ProfileButton />
            </> :
            <>
                <Navlink>Login</Navlink>
                <Navlink>Signup</Navlink>
            </>}
        </div>
    )
}

export default Nav
