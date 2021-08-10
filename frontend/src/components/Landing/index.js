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
            <img style={{width: 150}} src={Logo} />
            <button className="landing-button" onClick={toLogin}>I'm Back</button>
            <button className="landing-button" onClick={toSignup}>I'm New Here</button>
            <button className='nav-button' onClick={loginDemo}>Demo</button>
        </div>
    )
}

export default Landing
