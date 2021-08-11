import React, { useState } from 'react'
import * as sessionActions from '../../store/session'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Redirect } from 'react-router-dom';
import { login } from '../../store/session'
import Logo from '../../images/vertical_explorer_logo-transparent.png'
import './login.css'

const Login = () => {
    const dispatch = useDispatch()
    const user = useSelector(state => state.session.user)

    const [credential, setCredential] = useState('')
    const [password, setPassword] = useState('')
    const [errs, setErrs] = useState([])

    if (user) return <Redirect to='/' />

    const loginDemo = () => {
        return dispatch(login({ credential: 'Demo', password: 'password' }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setErrs([])
        return dispatch(sessionActions.login({ credential, password }))
            .catch(async (res) => {
                const data = await res.json()
                if (data && data.errors) {
                    setErrs(data.errors)
                }
            })
    }

    return (
        <div className="form">
            <Link to='/'><img style={{width: 175}} src={Logo} /></Link>

            <form onSubmit={handleSubmit}>
                <div className="form-errors">
                    {errs.map((error, idx) => <p key={idx}>{error}</p>)}
                </div>
                <label>
                    Username/Email
                    <input
                        type='text'
                        value={credential}
                        placeholder="Rocky"
                        onChange={(e) => setCredential(e.target.value)}
                        required
                    />
                </label>
                <label>
                    Password
                    <input
                        type='password'
                        value={password}
                        placeholder="password"
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </label>
                <button type="submit">Login <i class="fas fa-arrow-right"></i></button>
            </form>
            <div id="link-to">
                <Link to='/signup'>Need to join?</Link><br/>
                <Link onClick={loginDemo}>Demo User <i class="fas fa-user-secret"></i></Link>
            </div>
        </div>
    )
}

export default Login;
