import React, { useState } from 'react'
import * as sessionActions from '../../store/session'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Redirect } from 'react-router-dom';
import { login } from '../../store/session'
import Logo from '../../images/vertical_explorer_logo-transparent.png'

const Settings = () => {
    const dispatch = useDispatch()
    const user = useSelector(state => state.session.user)

    let [errs, setErrs] = useState([])

    const handleSubmit = () => {}

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
                        // value={userName}
                        // onChange={(e) => setCredential(e.target.value)}
                    />
                </label>
                <label>
                    Current Password
                    <input
                        // type='password'
                        // value={password}
                        // placeholder="password"
                        // onChange={(e) => setPassword(e.target.value)}
                    />
                </label>
                <label>
                    New Password
                    <input
                        // type='password'
                        // value={password}
                        // placeholder="password"
                        // onChange={(e) => setPassword(e.target.value)}
                    />
                </label>
                <button type="submit">Update <i class="fas fa-thumbs-up"></i></button>
            </form>
            <div id="link-to">
            </div>
        </div>
    )
}

export default Settings;
