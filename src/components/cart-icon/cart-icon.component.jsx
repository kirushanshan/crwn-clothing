import React from "react";
import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { selectCartItemsCount } from "../../redux/user/cartselector";

import { ReactComponent as ShopingIcon } from '../../assets/shopping-bag.svg';

import './cart-icon.styles.scss'; 

const CartIcon = ({toggleCartHidden, itemCount})=> (
    <div className="cart-icon" onClick={toggleCartHidden}>
        <ShopingIcon className="shopping-icon"/>
        <span className="item-count">{itemCount}</span>
    </div>
)

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

// const mapStateToProps = ({cart: {cartItems}}) => ({

//     itemCount: cartItems.reduce((accumaltedQuantity, cartItem) => accumaltedQuantity + cartItem.quantity,
//      0)
// })

const mapStateToProps = (state) => ({
    itemCount : selectCartItemsCount(state)
});

export default connect (
    mapStateToProps,
    mapDispatchToProps
    )( CartIcon);