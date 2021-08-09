import React from 'react'
import { useDispatch } from 'react-redux'
import { logout } from '../../store/session'

const Logout = () => {

    const dispatch = useDispatch()

    const logoutUser = () => {
        dispatch(logout())
    }

    return (
        <button id='logout-button' onClick={logoutUser}>Logout</button>
    )
}

export default Logout
