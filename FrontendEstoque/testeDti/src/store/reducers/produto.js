import { PRODUTOS } from '../actions/actionTypes'

const initialState = {
    produtos: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case PRODUTOS:
            return {
                ...state,
                produtos: action.payload
            }
        default:
            return state
    }
}

export default reducer