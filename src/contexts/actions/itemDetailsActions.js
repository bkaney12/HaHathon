import { GET_PRODUCT_ERROR, GET_PRODUCT_LOADING, GET_PRODUCT_SUCCESS } from "../../utils/constants";

export const productLoading = () => ({ type: GET_PRODUCT_LOADING });
export const productSuccess = (data) => ({ type: GET_PRODUCT_SUCCESS, payload: data });
export const productError = (msg) => ({ type: GET_PRODUCT_ERROR, payload: msg })