import { defaults } from "js-cookie"
import { csrfFetch } from "./csrf"

// Action Creators
const SET_USER = 'session/SET_USER'
const REMOVE_USER = 'session/REMOVE_USER'

// Dispatcher
const setUser = (user) => {
    return {
        type: SET_USER,
        payload: user,
    }
}

const removeUser = () => {
    return {
        type: REMOVE_USER,
    }
}

// Thunk
export const login = (user) => async(dispatch) => {
    const { credential, password } = user
    const response = await csrfFetch('/api/session', {
        method: 'POST',
        body: JSON.stringify({
            credential,
            password,
        })
    })
    const data = await response.json()
    dispatch(setUser(data.user))
    return response
}

export const logout = () => async(dispatch) => {
    const response = await csrfFetch('/api/session', {
        method: 'DELETE'
    })
}

// Reducer
const initialState = { user: null }

const sessionReducer = (state = initialState, action) => {
    let newState;
    switch(action.type) {
        case SET_USER:
            newState = Object.assign({}, state)
            newState.user = action.payload
            return newState
        case REMOVE_USER:
            newState = Object.assign({}, state)
            newState.user = null
            return newState
        default:
            return state
    }
}

export default sessionReducer
