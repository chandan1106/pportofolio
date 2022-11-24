import { application } from "express";

function productlistreducer{state: {products[], action}{
    switch(action.type){
        case: PRODUCTS_LISTS_REQUEST;
        return {loading: true};
        case PRODUCT_LISTS_SUCCESS:
            return{loading:false, products: application.payload};
            case PRODUCT_LISTS_FAILS;
            return{loading:false,error:action.payload}
            default:
                return state!
    }
}}

export {productlistreducer}