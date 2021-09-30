import React, { useState } from 'react'
import * as sessionActions from '../../store/session'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom';
import { edit } from '../../store/session'
import './Settings.css'

const Settings = () => {
    const history = useHistory()
    const dispatch = useDispatch()
    const user = useSelector(state => state.session.user)

    const [username, setUsername] = useState(user.username)
    const [email, setEmail] = useState(user.email)
    const [password, setPassword] = useState('')
    const [confirm, setConfirm] = useState('')

    let errs = []

    const handleSubmit = async (e) => {
        e.preventDefault()
        if(username.length === 0 || email.length === 0) {
            errs.push('Username and/or Email cannot be empty.')
        }

        if(password !== confirm) {
            console.log('HERE!!!!!!!!!!!!!!!!!!')
            errs.push("New Password and Confirm New Password fields don't match.")
        }

        if(errs.length === 0) {
            await dispatch(edit({ id: user.id, username, email, password }))
            history.push('/')
        } else {
            return errs
        }
    }

    return (
        <div className="settings-form">
            <form onSubmit={handleSubmit}>
                <div className="form-errors">
                    {errs.map((error, idx) => <p key={idx}>{error}</p>)}
                </div>
                <label>
                    Username
                    <input
                        type='text'
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </label>
                <label>
                    Email
                    <input
                        type='email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </label>
                <label>
                    New Password
                    <input
                        type='password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </label>
                <label>
                    Confirm Password
                    <input
                        type='password'
                        value={confirm}
                        onChange={(e) => setConfirm(e.target.value)}
                    />
                </label>
                <button type="submit">Update <i class="fas fa-thumbs-up"></i></button>
            </form>
            <button className="form-alt" onClick={() => history.push('/')}>Nevermind <i class="fas fa-undo-alt"></i></button>
        </div>
    )
}

export default Settings;
