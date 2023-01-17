import {combineReducers} from 'redux';

import userReducer from './user/user.reduser';
import cartReduser from './cart/cart.reduser';

export default combineReducers({
    user: userReducer, 
    cart: cartReduser
});

