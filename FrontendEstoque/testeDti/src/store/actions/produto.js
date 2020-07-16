import { PRODUTOS } from './actionTypes'

export const setProdutos = produtos => {
    return {
        type: PRODUTOS,
        payload: produtos
    }
}