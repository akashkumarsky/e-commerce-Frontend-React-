import { api } from "../../config/ApiConfig";




export const getCartItem = () => async (dispatch) => {
    try {
        dispatch({ type: "GET_CART_ITEM_REQUEST" });

        const response = await api.get(`/api/cart/`);

        dispatch({
            type: "GET_CART_ITEM_SUCCESS",
            payload: response.data,
        });

    } catch (error) {
        dispatch({
            type: "GET_CART_ITEM_FAILURE",
            payload: error.message,
        });
    }
}

export const addItemToCart = (data) => async (dispatch) => {
    try {
        dispatch({ type: "ADD_ITEM_TO_CART_REQUEST" });

        const response = await api.put(`/api/cart/add`,data);

        dispatch({
            type: "ADD_ITEM_TO_CART_SUCCESS",
            payload: response.data,
        });

    } catch (error) {
        dispatch({
            type: "ADD_ITEM_TO_CART_FAILURE",
            payload: error.message,
        });
    }
};

export const removeCartItem = (cartItemId) => async (dispatch) => {
    try {
        dispatch({ type: "REMOVE_CART_ITEM_REQUEST" });

        const response = await api.delete(`/api/cart_items/${cartItemId}`);

        dispatch({
            type: "REMOVE_CART_ITEM_SUCCESS",
            payload: response.data,
        });

    } catch (error) {
        dispatch({
            type: "REMOVE_CART_ITEM_FAILURE",
            payload: error.message,
        });
    }
};

export const updateCartItem = (cartItemId, data) => async (dispatch) => {
    try {
        dispatch({ type: "UPDATE_CART_ITEM_REQUEST" });

        const response = await api.put(`/api/cart_items/${cartItemId}`,data);

        dispatch({
            type: "UPDATE_CART_ITEM_SUCCESS",
            payload: response.data,
        });

    } catch (error) {
        dispatch({
            type: "UPDATE_CART_ITEM_FAILURE",
            payload: error.message,
        });
    }
};
