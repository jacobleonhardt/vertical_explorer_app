import React, { useState } from 'react'
import * as sessionActions from '../../store/session'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom';
import './login.css'

const Login = () => {
    const dispatch = useDispatch()
    const user = useSelector(state => state.session.user)

    const [credentials, setCredentials] = useState('')
    const [password, setPassword] = useState('')
    const [errs, setErrs] = useState([])

    if (user) return <Redirect to='/' />

    const handleSubmit = (e) => {
        e.preventDefault()
        setErrs([])
        return dispatch(sessionActions.login({ credentials, password }))
            .catch(async (res) => {
                const data = await res.json()
                if (data && data.errors) {
                    setErrs(data.errors)
                }
            })
    }

    return (
        <div className="form">
            <form onSubmit={handleSubmit}>
                <div className="form-errors">
                    {errs.map((error, idx) => <p key={idx}>{error}</p>)}
                </div>
                <label>
                    Username/Email
                    <input
                        type='text'
                        value={credentials}
                        placeholder="Username/Email"
                        onChange={(e) => setCredentials(e.target.value)}
                        required
                    />
                </label>
                <label>
                    Password
                    <input
                        type='password'
                        value={password}
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </label>
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default Login;
