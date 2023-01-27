import React from "react";
import { Link } from "react-router-dom";

import { auth } from "../../firebase/firebase.utils";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.commponent";

import { connect, Connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCartHidden } from "../../redux/user/cartselector";
import { selectCurrentUser } from "../../redux/user/user.selector";

import './header.styles.scss'

import { ReactComponent as Logo } from '../../assets/crown.svg';

const Header = ({currentUser, hidden}) => (
    <div className="header">
    {console.log("hi" + currentUser)}
        <Link className="logo-container" to="/">
            <Logo className="logo"/>
        </Link>
        <div className="options"> 
            <Link className="option" to="/shop">
                shop
            </Link>
            <Link className="option" to="/shop">
                contact
            </Link>
            {
                currentUser ? (
                <div className="option" onClick={() => auth.signOut()}>
                sign out
                </div>
                ) : (
                <Link className="option" to="/signin">
                sign in
                </Link>
            )}
            <CartIcon/>
        </div>
        {
            hidden ? null :  <CartDropdown/>
        }
    </div>


);

// const mapStateToProps = ({user: {currentUser}, cart: {hidden}}) => ({
//     currentUser,
//     hidden
// });

// const mapStateToProps = (state) => ({
//     currentUser : selectCurrentUser(state),
//     hidden: selectCartHidden(state)
// });

const mapStateToProps = createStructuredSelector ({
    currentUser : selectCurrentUser,
    hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);
