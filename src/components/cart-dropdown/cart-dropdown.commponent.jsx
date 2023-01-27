import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/user/cartselector';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

import './cart-dropdown.styles.scss';


// we dont write dispathch method unnescary we put as a variable 

const CartDropdown = ({cartItems, history, dispatch})=> (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {
                cartItems.length ?
                cartItems.map(cartItem => (<CartItem key={cartItem.id} item={cartItem} />))
                : 
                <span className='empty-message'>Your cart is empty</span>
            }
        </div>
        <CustomButton onClick={() => {
            history.push('/checkout')
            dispatch(toggleCartHidden())
            }}>
        Check Out
        </CustomButton>
    </div>
)

// const mapStateToProps = ({cart: {cartItems}}) => ({
//     cartItems
// })

// const mapStateToProps = (state) => ({
//     cartItems : selectCartItems(state)
// })


const mapStateToProps = createStructuredSelector({
    cartItems : selectCartItems
})



// export default connect(mapStateToProps) (CartDropdown);

export default withRouter(connect(mapStateToProps)(CartDropdown));