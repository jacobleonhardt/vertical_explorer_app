import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { getUserClimbs, deletePrevClimb } from '../../store/climbs'
import DeleteClimb from '../DeleteClimb/index'

const PrevClimbs = ({ climb }) => {
    const history = useHistory()
    const dispatch = useDispatch()
    const climbs = useSelector(state => state.climbs)
    const [showDel, setShowDel] = useState(false)

    const deleteClimb = async (e, climb_id, height) => {
        setShowDel(true)
    }

    const cancelDelClimb = () => {
        setShowDel(false)
    }


    return (
        <>
            {showDel ? <DeleteClimb setShowDel={setShowDel} showDel={showDel} climb_id={climb.id} /> : <></>}
            <div className="climb" key={climb.id}>
                <h4>{climb.height} ft. <i class="fas fa-ruler-combined"></i></h4>
                <h4>{climb.difficulty} <i class="fas fa-tachometer-alt"></i></h4>
                <button onClick={(e) => deleteClimb(e, climb.id, climb.height)} class="delete">Delete <i class="fas fa-trash-alt"></i></button>
            </div>
        </>
    )
}

export default PrevClimbs
