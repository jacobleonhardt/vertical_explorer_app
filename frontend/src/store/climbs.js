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

// Thunk

export const getUserClimbs = () => async(dispatch) => {
    console.log('&&&&&&&&&& HERE &&&&&&&&&&')
    const response = await csrfFetch('/api/climbs')
    if(response.ok) {
        const data = await response.json()
        dispatch(getClimbs(data))
        return data
    }
}

// Reducer
const climbsReducer = (state = null, action) => {
    switch(action.type) {
        case GET_CLIMBS:
            state = action.payload
            return state
        default:
            return state
    }
}

export default climbsReducer