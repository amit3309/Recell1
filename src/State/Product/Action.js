import { api } from "../../config/apiConfig";
import { FIND_PRODUCTS_FAILURE, FIND_PRODUCTS_REQUEST, FIND_PRODUCTS_SUCCESS, FIND_PRODUCT_BY_ID_FAILURE, FIND_PRODUCT_BY_ID_REQUEST, FIND_PRODUCT_BY_ID_SUCCESS } from "./ActionType";
//import { FIND_PRODUCTS_FALIURE, FIND_PRODUCT_BY_ID_REQUEST, FIND_PRODUCT_BY_ID_SUCCESS, FIND_PRODUCT_REQUEST, FIND_PRODUCT_SUCCESS } from "./ActionType";

export const findProducts = (reqData) => async (dispatch) => {
    dispatch({type:FIND_PRODUCTS_REQUEST})
    const {
        colors,
        size,
        minPrice,
        maxPrice,
        minDiscount,
        category,
        brand,
        stock,
        sort,
        pageNumber,
        pageSize
    } = reqData;

    console.log("test",reqData)

    try {
        console.log(colors,size,category)
    // const {data}=await api.get(`/api/products?color=${colors}&sizes=${sizes}&minPrice=${minPrice}&
    // maxPrice=${maxPrice}&minDiscount=${minDiscount}&category=${category}&stock=${stock}&sort=
    // ${sort}&pageNumber=${pageNumber}&pageSize=${pageSize}`)

    // const {data}=await api.get(`/api/products/${colors}/${sizes}/${minPrice}/${maxPrice}/${minDiscount}/${category}/${stock}/${sort}/${pageNumber}/${pageSize}`)
    const {data}=await api.get(`/api/products?category=${category}&color=${colors}&size=${size}
    &minPrice=${minPrice}&maxPrice=${maxPrice}&minDiscount=${minDiscount}&stock=${stock}
    &sort=${sort}&pageNumber=${pageNumber}&pageSize=${pageSize}`)
    // console.log(`/api/products?category=${category}&color=${colors}&size=${size}
    // &minPrice=${minPrice}&maxPrice=${maxPrice}&minDiscount=${minDiscount}&stock=${stock}
    // &sort=${sort}&pageNumber=${pageNumber}&pageSize=${pageSize}`)
    console.log(data)

    dispatch({type:FIND_PRODUCTS_SUCCESS,payload:data})

    } catch (error) { 

        dispatch({type:FIND_PRODUCTS_FAILURE,payload:error.message})
    }

};


export const findProductsById = (reqData) => async (dispatch) => {
    dispatch({type:FIND_PRODUCT_BY_ID_REQUEST})
    const {productId} = reqData;



    try {
    const {data}=await api.get(`/api/products/id/${productId}`)
    console.log("data",data)

    dispatch({type:FIND_PRODUCT_BY_ID_SUCCESS,payload:data})

    } catch (error) { 

        dispatch({type:FIND_PRODUCT_BY_ID_FAILURE,payload:error.message})
    }

};