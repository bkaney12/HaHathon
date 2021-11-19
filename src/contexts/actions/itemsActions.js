import { GET_PRODUCTS_ERROR, GET_PRODUCTS_LOADING, GET_PRODUCTS_SUCCESS } from '../../utils/constants';

export const productsLoading = () => ({ type: GET_PRODUCTS_LOADING });

export const productsSuccess = (data) => ({ type: GET_PRODUCTS_SUCCESS, payload: data });

export const productsError = (msg) => ({ type: GET_PRODUCTS_ERROR, payload: msg })