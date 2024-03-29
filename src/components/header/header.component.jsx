import React from "react";
import { Link } from "react-router-dom";

import { auth } from "../../firebase/firebase.utils";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.commponent";

import { connect, Connect } from "react-redux";

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

const mapStateToProps = ({user: {currentUser}, cart: {hidden}}) => ({
    currentUser,
    hidden
});

export default connect(mapStateToProps)(Header);
