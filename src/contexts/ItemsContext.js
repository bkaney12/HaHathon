
import React, { createContext, useContext, useReducer } from "react";
import { $api } from "../service/axios-config";
import {
  GET_PRODUCTS_ERROR,
  GET_PRODUCTS_LOADING,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCT_ERROR,
  GET_PRODUCT_SUCCESS,
  GET_PRODUCT_LOADING,
  GET_CART,
  ADD_TO_CART,
   SET_SEARCH_RESULTS 
} from "../utils/constants";
import {
  productsError,
  productsLoading,
  productsSuccess,
  setSearchResults
} from "./actions/itemsActions";
import {
  productError,
  productLoading,
  productSuccess,
} from "./actions/itemDetailsActions";
import { useNavigate, useLocation } from "react-router";
import { calcSubPrice, calcTotalPrice } from "../utils/calculations";
import { checkItemInCart } from "../utils/check-cart";


const productsContext = createContext();

export const useProducts = () => useContext(productsContext);

const initialState = {

  loading: false,
  error: null,
  products: [],
  productDetails: {
    loading: false,
    error: null,
    product: null,
  },  
    searchResults: [],
  cartData: JSON.parse(localStorage.getItem("cart"))
    ? JSON.parse(localStorage.getItem("cart")).decors.length
    : 0,
  cart: {},

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

    case GET_PRODUCT_LOADING:
      return {
        ...state,
        productDetails: { ...state.productDetails, loading: true },
      };

    case GET_PRODUCT_SUCCESS:
      return {
        ...state,
        productDetails: {
          ...state.productDetails,
          loading: false,
          error: null,
          product: action.payload,
        },
      };


    case GET_PRODUCT_ERROR:
      return {
        ...state,
        productDetails: {
          ...state.productDetails,
          loading: false,
          error: action.payload,
          product: null,
        },
      };
    case SET_SEARCH_RESULTS: 
         return {
            ...state,
            searchResults: action.payload,
         };

  

    case ADD_TO_CART: {
      return {
        ...state,
        cartData: action.payload,
      };
    }
    case GET_CART: {
      return {
        ...state,
        cart: action.payload,
      };
    }
    default:
      return state;
  }

};

const ItemsContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const navigate = useNavigate();
  const location = useLocation();

  const fetchProducts = async () => {
    dispatch(productsLoading());
    try {
      const { data } = await $api(`${window.location.search}`);
      setTimeout(() => {
        dispatch(productsSuccess(data));

      }, 200);

      // console.log(data);
    } catch (error) {
      console.log(error.message);
      dispatch(productsError(error.message));
    }
  };

  const fetchOneProduct = async (id) => {
    dispatch(productLoading());
    try {
      const { data } = await $api(`/${id}`);
      dispatch(productSuccess(data));
    } catch (error) {
      console.log(error.message);
      dispatch(productError(error.message));
    }
  };

  const deleteProduct = async (id) => {
    try {
      await $api.delete(`${id}`);
    } catch (error) {
      console.log(error.message);
    }
  };

  const addItem = async (newItem) => {
    try {
      await $api.post("/", newItem);
    } catch (e) {
      console.log(e.message);
    }
  };
  const editItem = (item) => {
    try {
      return $api.patch(`/${item.id}`, item);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchByParams = async (query, value) => {
    const search = new URLSearchParams(location.search);

    if (value === "all") {
      search.delete(query);
    } else if (Array.isArray(value)) {
      search.set("price_gte", value[0]);
      search.set("price_lte", value[1]);
    } else {
      search.set(query, value);
    }

    const url = `${location.pathname}?${search.toString()}`;
    navigate(url);
  };
   const fetchSearchProducts = async (value) => {
      try {
         if (!value) {
            dispatch(setSearchResults([]));
            return;
         } 
            const { data } = await $api(`?q=${value}`)
            dispatch(setSearchResults(data))
      } catch (error) {
         console.log(error.message)
      }
   }
  const addToCart = (product) => {
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (!cart) {
      cart = {
        decors: [],
        totalPrice: 0,
      };
    }

    let newProduct = {
      count: 1,
      subPrice: 0,
      product: product,
    };
    console.log(newProduct);
    newProduct.subPrice = calcSubPrice(newProduct);

    cart.decors.push(newProduct);
    cart.totalPrice = calcTotalPrice(cart.decors);
    localStorage.setItem("cart", JSON.stringify(cart));
    dispatch({
      type: ADD_TO_CART,
      payload: cart.decors.length,
    });
  };
  const deleteProductFromCart = (product) => {
    let cart = JSON.parse(localStorage.getItem("cart"));
    const isItemInCart = checkItemInCart(cart.decors, product.id);
    if (isItemInCart) {
      cart.decors = cart.decors.filter((item) => {
        return item.product.id !== product.id;
      });
      cart.totalPrice = calcTotalPrice(cart.decors);
      localStorage.setItem("cart", JSON.stringify(cart));
    }
    dispatch({
      type: ADD_TO_CART,
      payload: cart.decors.length,
    });
  };
  const getCart = () => {
    let cartFromLS = JSON.parse(localStorage.getItem("cart"));
    dispatch({
      type: GET_CART,
      payload: cartFromLS,
    });

    // console.log(cartFromLS);
  };
  const values = {
    products: state.products,
    loading: state.loading,
    error: state.error,
    productDetails: state.productDetails.product,
    productDetailsLoading: state.productDetails.loading,
    productDetailsError: state.productDetails.error,
    cart: state.cart,
    cartData: state.cartData,
    fetchProducts,
    fetchOneProduct,
    deleteProduct,
    addItem,
    editItem,
    fetchByParams,
    addToCart,
    getCart,
    deleteProductFromCart,
     searchResults: state.searchResults,
     fetchSearchProducts,
    
    
  };

  return (
    <productsContext.Provider value={values}>
      {children}
    </productsContext.Provider>
  );

};

export default ItemsContext;
