import { ADD_PRODUCT, EDIT_PRODUCT, DELETE_PRODUCT, SINGLE_PRODUCT, IS_AUTHENTICATED } from "../actions";

export const addProduct = (payload) => ({
  type: ADD_PRODUCT,
  payload,
});

export const editProduct = (payload) => ({
  type: EDIT_PRODUCT,
  payload,
});

export const deleteProduct = (payload) => ({
  type: DELETE_PRODUCT,
  payload,
});

export const singleProduct = (payload) => ({
  type: SINGLE_PRODUCT,
  payload,  
});

export const isAuthenticated = (payload) => ({
  type: IS_AUTHENTICATED,
  payload,  
});
