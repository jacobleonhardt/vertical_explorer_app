import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUserClimbs, deletePrevClimb } from '../../store/climbs'
import './DeleteClimb.css'

const DeleteClimb = ({ user, showDel, setShowDel, climb_id }) => {
    const dispatch = useDispatch()

    const deleteClimb = async (e, climb_id, height) => {
        e.preventDefault()
        await dispatch(deletePrevClimb(user.id, climb_id, height))
        dispatch(getUserClimbs())
        setShowDel(false)
    }

    const cancelDelClimb = () => {
        setShowDel(false)
    }

    return (
        <div id="modal" className="modal">
            <h5>Do you want to remove this climb?</h5>
            <div id="buttons">
                <button className="modal-choice" onClick={deleteClimb}>Yeah <i class="fas fa-check"></i></button>
                <button className="modal-choice" onClick={cancelDelClimb}>Nope <i class="fas fa-times"></i></button>
            </div>
        </div>
    )
}

export default DeleteClimb
