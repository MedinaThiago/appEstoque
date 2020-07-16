import { createStore, combineReducers } from 'redux'
import produtoReducer from './reducers/produto'

const reducers = combineReducers({
    produto: produtoReducer,
})

const storeConfig = () => {
    return createStore(reducers)
}

export default storeConfig