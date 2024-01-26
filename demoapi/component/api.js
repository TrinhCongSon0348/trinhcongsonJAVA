// api.js
const BASE_URL = 'https://fakestoreapi.com/products';

export const getProductListUrl = () => `${BASE_URL}/products`;
export const getProductDetailUrl = (id) => `${BASE_URL}/products/${id}`;
