import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import { makeNewClimb } from '../../store/climbs'
import { restoreUser } from '../../store/session'
import './ClimbForm.css'

const ClimbForm = () => {
    const history = useHistory()
    const dispatch = useDispatch()
    const [height, setHeight] = useState(0)
    const [diff, setDiff] = useState(0.0)
    const [errs, setErrs] = useState('')
    const user_id = useSelector(state => state.session.user.id)

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (height <= 0) {
            setErrs('Please provide a valid height.')
        } else {
            await dispatch(makeNewClimb(user_id, height, diff))
            await dispatch(restoreUser())
            history.push('/')
        }
    }

    return (
        <div className="climb-form">
            <form onSubmit={handleSubmit}>
                <div className="form-errors">
                    { errs ? <p>{errs}</p> : <></> }
                </div>
                <label> Height (ft)
                    <input placeholder={"30"}
                    type="number"
                    required
                    onChange={(e) => setHeight(e.target.value)}></input>
                </label>
                <label>Difficulty
                    <input placeholder={"5.9"}
                    type="number"
                    step="0.01"
                    onChange={(e) => setDiff(e.target.value)}></input>
                </label>
                <button type="submit">Add Climb <i className="fas fa-plus"></i></button>
            </form>
        </div>
    )
}

export default ClimbForm
