import { API_BASE_URL } from '../../config/ApiConfig';
import { 

FIND_PRODUCTS_REQUEST,
FIND_PRODUCTS_SUCCESS,
FIND_PRODUCTS_FAILURE
} from './ActionType';

export const findProducts = (reqData) => async (dispatch) => {
try {
    dispatch({ type: FIND_PRODUCTS_REQUEST });

    const queryString = new URLSearchParams({
        category: reqData.category || '',
        color: reqData.color || '',
        size: reqData.size || '',
        minPrice: reqData.minPrice || '',
        maxPrice: reqData.maxPrice || '',
        minDiscount: reqData.minDiscount || '',
        sort: reqData.sort || '',
        stock: reqData.stock || '',
        pageNumber: reqData.pageNumber || '',
        pageSize: reqData.pageSize || ''
    }).toString();

    const response = await fetch(
        `${API_BASE_URL}/api/products?${queryString}`
    );
    const data = await response.json();

    dispatch({
        type: FIND_PRODUCTS_SUCCESS,
        payload: data
    });
} catch (error) {
    dispatch({
        type: FIND_PRODUCTS_FAILURE,
        payload: error.message
    });
}
};

export const findProductById = (productId) => async (dispatch) => {
    try {
        const response = await fetch(`${API_BASE_URL}/api/products/${productId}`);
        const data = await response.json();
        
        dispatch({
            type: 'FIND_PRODUCT_BY_ID_SUCCESS',
            payload: data
        });
    } catch (error) {
        dispatch({
            type: 'FIND_PRODUCT_BY_ID_FAILURE',
            payload: error.message
        });
    }
};