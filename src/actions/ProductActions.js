import axios from 'axios';
import { PRODUCTS_FETCH, PRODUCT_FETCH, PRODUCT_CREATE, PRODUCT_UPDATE } from './types'

export const productFetch = id => {
    return dispatch => {
        axios.get('http://localhost:3001/shirts/' + id)
            .then(res => {
                dispatch({ type: PRODUCT_FETCH, payload: res.data })
            })
    }
}


export const productsFetch = () => {
    return dispatch => {
        axios.get('http://localhost:3001/shirts')
            .then(res => {
                dispatch({ type: PRODUCTS_FETCH, payload: res.data })
            })
    }
}

export const productDelete = id => {
    return dispatch => {
        axios.delete('http://localhost:3001/shirts/' + id)
            .then(res => {
                axios.get('http://localhost:3001/shirts')
                    .then(res => {
                        dispatch({ type: PRODUCTS_FETCH, payload: res.data })
                    })
            })
    }
}

export const productCreate = values => {
    return dispath => {
        axios.post('http://localhost:3001/shirts', values)
            .then(res => {
                dispath({ type: PRODUCT_CREATE })
            })
    }
}

export const productUpdate = (id, values) => {
    return dispath => {
        axios.put('http://localhost:3001/shirts/' + id, values)
            .then(res => {
                dispath({ type: PRODUCT_UPDATE })
            })
    }
}