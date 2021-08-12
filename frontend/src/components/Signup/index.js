import React, { useState } from 'react'
import * as sessionActions from '../../store/session'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect } from 'react-router'
import { Link } from 'react-router-dom'
import Logo from '../../images/vertical_explorer_logo-transparent.png'
// Styles for forms handled via Login.css

const Signup = () => {
    const dispatch = useDispatch()
    const user = useSelector(state => state.session.user)
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirm, setConfirm] = useState('')
    const [errs, setErrs] = useState([])

    if (user) return <Redirect to="/" />

    const handleSubmit = (e) => {
        e.preventDefault()
        if (password === confirm) {
            setErrs([])
            return dispatch(sessionActions.signup({ username, email, password }))
                .catch( async (res) => {
                    const data = await res.json()
                    if (data && data.errors) setErrs(data.errors)
                })
            }

        return setErrs(["Confirm Password field doesn't match the Password field."])
    }

    return (
        <div className="form">
            <Link to='/'><img style={{width: 175}} src={Logo} /></Link>

            <form onSubmit={handleSubmit}>
                <div className="form-errors">
                    {errs.map((error, idx) => <p key={idx}>{error}</p>)}
                </div>
                <label>Username
                    <input
                        type='text'
                        value={username}
                        placeholder='Rocky'
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </label>
                <label>Email
                    <input
                        type='email'
                        value={email}
                        placeholder='rocky@climbitall.com'
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </label>
                <label>Password
                    <input
                        type='password'
                        value={password}
                        placeholder='Password'
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </label>
                <label>Confirm
                    <input
                        type='password'
                        value={confirm}
                        placeholder='Confirm Password'
                        onChange={(e) => setConfirm(e.target.value)}
                        required
                    />
                </label>
                <button type="submit">Get Started <i class="fas fa-user-check"></i></button>
            </form>
            <div id="link-to">
                <Link to='/login'>Have an Account?</Link>
            </div>
        </div>
    )
}

export default Signup
