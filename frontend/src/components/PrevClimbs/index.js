import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { getUserClimbs, deletePrevClimb } from '../../store/climbs'
import DeleteClimb from '../DeleteClimb/index'

const PrevClimbs = ({ climb, user }) => {
    const history = useHistory()
    const dispatch = useDispatch()
    const climbs = useSelector(state => state.climbs)
    const [showDel, setShowDel] = useState(false)

    const deleteClimb = () => {
        setShowDel(true)
    }

    const cancelDelClimb = () => {
        setShowDel(false)
    }


    return (
        <>
            {showDel ? <DeleteClimb user={user} setShowDel={setShowDel} climb_id={climb.id} height={climb.height} /> : <></>}
            <div className="climb" key={climb.id}>
                <h4>{climb.height} ft. <i className="fas fa-ruler-combined"></i></h4>
                <h4>{climb.difficulty} <i className="fas fa-tachometer-alt"></i></h4>
                <button onClick={() => deleteClimb()} className="delete">Delete <i class="fas fa-trash-alt"></i></button>
            </div>
        </>
    )
}

export default PrevClimbs
