import React, { createContext, useContext, useReducer } from "react";
import { $api } from "../service/axios-config";
import {
  GET_PRODUCTS_ERROR,
  GET_PRODUCTS_LOADING,
  GET_PRODUCTS_SUCCESS,
} from "../utils/constants";
import {
  productsError,
  productsLoading,
  productsSuccess,
} from "./actions/itemsActions";

const productsContext = createContext();

export const useProducts = () => useContext(productsContext);

const initialState = {
  loading: false,
  error: null,
  products: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case GET_PRODUCTS_LOADING:
      return { ...state, loading: true };

    case GET_PRODUCTS_ERROR:
      return { ...state, loading: false, products: [], error: action.payload };

    case GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        products: action.payload,
      };

    default:
      return state;
  }
};

const ItemsContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchProducts = async () => {
    dispatch(productsLoading());
    try {
      const { data } = await $api();
      setTimeout(() => {
        dispatch(productsSuccess(data));
      }, 300);

      console.log(data);
    } catch (error) {
      console.log(error.message);
      dispatch(productsError(error.message));
    }
  };

  const addItem = async (newItem) => {
    try {
      await $api.post("/", newItem);
    } catch (e) {
      console.log(e.message);
    }
  };

  const values = {
    products: state.products,
    loading: state.loading,
    error: state.error,
    fetchProducts,
    addItem,
  };

  return (
    <productsContext.Provider value={values}>
      {children}
    </productsContext.Provider>
  );
};

export default ItemsContext;
