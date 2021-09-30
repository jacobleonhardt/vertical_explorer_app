import React, { useState } from 'react'
import * as sessionActions from '../../store/session'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom';
import { login } from '../../store/session'
import './Settings.css'

const Settings = () => {
    const history = useHistory()
    const dispatch = useDispatch()
    const user = useSelector(state => state.session.user)

    const userName = useSelector(state => state.session.user.username)
    const userEmail = useSelector(state => state.session.user.email)

    let [errs, setErrs] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault()

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
                        value={userName}
                        // onChange={(e) => setCredential(e.target.value)}
                    />
                </label>
                <label>
                    Email
                    <input
                        type='email'
                        value={userEmail}
                        // onChange={(e) => setCredential(e.target.value)}
                    />
                </label>
                <label>
                    Current Password
                    <input
                        type='password'
                        // value={password}
                        // placeholder="password"
                        // onChange={(e) => setPassword(e.target.value)}
                    />
                </label>
                <label>
                    New Password
                    <input
                        type='password'
                        // value={password}
                        // placeholder="password"
                        // onChange={(e) => setPassword(e.target.value)}
                    />
                </label>
                <button type="submit">Update <i class="fas fa-thumbs-up"></i></button>
            </form>
            <button className="form-alt" onClick={() => history.push('/')}>Nevermind <i class="fas fa-undo-alt"></i></button>
        </div>
    )
}

export default Settings;
