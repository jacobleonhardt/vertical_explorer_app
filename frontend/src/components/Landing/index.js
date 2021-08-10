import React from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { login } from '../../store/session'
import Logo from '../../images/vertical_explorer_logo-transparent.png'
import './Landing.css'

const Landing = () => {
    const dispatch = useDispatch()
    const history = useHistory()

    function toLogin() {
        history.push('/login')
    }

    function toSignup() {
        history.push('/signup')
    }

    const loginDemo = () => {
        return dispatch(login({ credential: 'Demo', password: 'password' }))
    }

    return (
        <div id='splash'>
            <img style={{width: 175}} src={Logo} />
            <h1>Vertical Explorer</h1>
            <h2>Climb-Tracking App</h2>
            <button className="landing-button" onClick={toLogin}>I'm Back <i class="fas fa-sign-in-alt"></i></button>
            <button className="landing-button" onClick={toSignup}>I'm New Here <i class="fas fa-user-plus"></i></button>
            <button className="landing-button alt" onClick={loginDemo}>Demo User <i class="fas fa-user-secret"></i></button>
        </div>
    )
}

export default Landing
