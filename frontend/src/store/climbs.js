import { csrfFetch } from "./csrf";

// Action Creator
const GET_CLIMBS = 'climbs/GET_CLIMBS'
const ADD_CLIMB = 'climbs/ADD_CLIMB'
const DELETE_CLIMB = 'climbs/REMOVE_CLIMB'

// Dispatcher
const getClimbs = (data) => {
    return {
        type: GET_CLIMBS,
        payload: data,
    }
}

const addClimbs = (data) => {
    return {
        type: ADD_CLIMB,
        payload: data,
    }
}

const deleteClimbs = (data) => {
    return {
        type: DELETE_CLIMB,
        payload: data,
    }
}

// Thunks
export const getUserClimbs = () => async(dispatch) => {
    const response = await csrfFetch('/api/climbs')

    if(response.ok) {
        const data = await response.json()
        dispatch(getClimbs(data))
        return data
    }
}

export const makeNewClimb = (user_id, height, difficulty) => async(dispatch) => {
    const response = await csrfFetch("/api/climbs", {
        method: "POST",
        body: JSON.stringify({
            user_id,
            height,
            difficulty,
        })
    })

    if(response.ok) {
        const data = await response.json()
        dispatch(addClimbs(data))
        return data
    }
}

export const deletePrevClimb = (user_id, climb_id, height) => async(dispatch) => {
    const response = await csrfFetch("api/climbs", {
        method: "DELETE",
        body: JSON.stringify({
            user_id,
            climb_id,
            height
        })
    })

    const data = await response.json()
    dispatch(deleteClimbs(data))
    return data
}

// Reducer
const climbsReducer = (state = null, action) => {
    switch(action.type) {
        case GET_CLIMBS:
            state = action.payload
            return state
        case ADD_CLIMB:
            state = action.payload
            return state
        case DELETE_CLIMB:
            state = action.payload
            return state
        default:
            return state
    }
}

export default climbsReducer
