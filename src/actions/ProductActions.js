import axios from 'axios';
import { PRODUCTS_FETCH, PRODUCT_FETCH, PRODUCT_CREATE, PRODUCT_UPDATE } from './types'

export const productFetch = id => {
    return dispatch => {
        axios.get(process.env.REACT_APP_API_URL + '/shirts/' + id)
            .then(res => {
                dispatch({ type: PRODUCT_FETCH, payload: res.data })
            })
    }
}


export const productsFetch = () => {
    return dispatch => {
        axios.get(process.env.REACT_APP_API_URL + '/shirts')
            .then(res => {
                dispatch({ type: PRODUCTS_FETCH, payload: res.data })
            })
    }
}

export const productDelete = id => {
    return dispatch => {
        axios.delete(process.env.REACT_APP_API_URL + '/shirts/' + id)
            .then(res => {
                axios.get(process.env.REACT_APP_API_URL + '/shirts')
                    .then(res => {
                        dispatch({ type: PRODUCTS_FETCH, payload: res.data })
                    })
            })
    }
}

export const productCreate = values => {
    return dispath => {
        axios.post(process.env.REACT_APP_API_URL + '/shirts', values)
            .then(res => {
                dispath({ type: PRODUCT_CREATE })
            })
    }
}

export const productUpdate = (id, values) => {
    return dispath => {
        axios.put(process.env.REACT_APP_API_URL + '/shirts/' + id, values)
            .then(res => {
                dispath({ type: PRODUCT_UPDATE })
            })
    }
}