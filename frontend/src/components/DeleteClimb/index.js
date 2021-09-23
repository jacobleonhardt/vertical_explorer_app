import React from 'react'
import { useDispatch } from 'react-redux'
import { deletePrevClimb } from '../../store/climbs'
import { restoreUser } from '../../store/session'
import './DeleteClimb.css'

const DeleteClimb = ({ user, setShowDel, climb_id, height }) => {
    const dispatch = useDispatch()

    const deleteClimb = async () => {
        dispatch(deletePrevClimb(user.id, climb_id, height))
        dispatch(restoreUser())
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
