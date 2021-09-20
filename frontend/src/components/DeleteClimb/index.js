import React, { useEffect } from 'react'
import { restoreUser } from '../../store/session'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { getUserClimbs, deletePrevClimb } from '../../store/climbs'

const DeleteClimb = ({ user, showDel, setShowDel }) => {
    const history = useHistory()
    const dispatch = useDispatch()
    const climbs = useSelector(state => state.climbs)

    const deleteClimb = async (e, climb_id, height) => {
        e.preventDefault()
        await dispatch(deletePrevClimb(user.id, climb_id, height))
        dispatch(restoreUser())
    }

    const cancelDelClimb = () => {
        setShowDel(false)
    }

    return (
        <div id="delete-climb">
            <h5>Do you want to remove this climb?</h5>
            <button onClick={deleteClimb}>Yeah <i class="fas fa-check"></i></button>
            <button onClick={cancelDelClimb}>Nope <i class="fas fa-times"></i></button>
        </div>
    )
}

export default DeleteClimb
