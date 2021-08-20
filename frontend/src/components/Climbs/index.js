import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router'
import { makeNewClimb } from '../../store/climbs'
import './ClimbForm.css'

const ClimbForm = () => {
    const history = useHistory()
    const dispatch = useDispatch()
    const [height, setHeight] = useState(0)
    const [diff, setDiff] = useState('')
    const [errs, setErrs] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        if (height <= 0 || typeof height != Number) {
            setErrs('Please provide a valid height.')
        } else {
            dispatch(makeNewClimb(height, diff))
            history.push('/')
        }
    }

    return (
        <div className="climb-form">
            <form onSubmit={handleSubmit}>
                <div className="form-errors">
                    { errs ? <p>{errs}</p> : <></> }
                </div>
                <label> Height
                    <input placeholder={"100ft"}
                    type="text"
                    required
                    onChange={(e) => setHeight(e.target.value)}></input>
                </label>
                <label>Difficulty
                    <input placeholder={"5.9"}
                    type="text"
                    onChange={(e) => setDiff(e.target.value)}></input>
                </label>
                <button type="submit">Add Climb <i className="fas fa-plus"></i></button>
            </form>
        </div>
    )
}

export default ClimbForm
