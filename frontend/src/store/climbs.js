import { csrfFetch } from "./csrf";

// Action Creator
const GET_CLIMBS = 'climbs/GET_CLIMBS'
const ADD_CLIMB = 'climbs/ADD_CLIMB'
const REMOVE_CLIMB = 'climbs/REMOVE_CLIMB'

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

    console.log('*****************', response.ok)

    if(response.ok) {
        console.log('@@@@@@@@@@@@@@ HERE @@@@@@@@@@@@@@')
        const data = await response.json()
        console.log('$$$$$$$$$$', data)

        dispatch(addClimbs(data))
        return data
    }
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
        default:
            return state
    }
}

export default climbsReducer
