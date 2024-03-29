import CartActionTypes from './cart.types.js';
import { addItemToCart } from './cart.utils.js';

const INITIAL_STATE = {
    hidden: true,
    cartItems: []
};

const cartReduser = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case CartActionTypes.TOGGLE_CART_HIDDEN: 
            return {
                ...state,
                hidden: !state.hidden
            }
        
        case CartActionTypes.ADD_ITEM:
            return {
                ...state,
                // cartItems: [...state.cartItems, action.payload]
                cartItems: addItemToCart(state.cartItems, action.payload)
            }

        default:
            return state;
    }
}

export default cartReduser;