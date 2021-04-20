import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { auth } from "../../firebase/firebase.utils";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import "./header.styles.scss";

const Header = ({ currentUser, hidden }) => (
	<div className="header">
		<Link to="/" className="logo-container">
			<Logo className="logo" />
		</Link>
		<div className="options">
			<Link className="option" to="/shop">
				SHOP
			</Link>
			<Link className="option" to="/shop">
				CONTACT
			</Link>
			{currentUser ? (
				<div className="option" onClick={() => auth.signOut()}>
					SIGN OUT
				</div>
			) : (
				<Link className="option" to="/signin">
					SIGN IN
				</Link>
			)}
			<CartIcon />
		</div>
		{hidden ? null : <CartDropdown />}
	</div>
);

const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
	// advanced destructuring of state is done..
	currentUser,
	hidden,
});
// we write a function mapStateToProps (can be anything but it is standard so,)
// what we return from the function is an object where the name of the property would be the actual prop that we pass in
// what we get in the function is the state object, this state is the root reducer
// now here we pass in currentUser property where the value would be state.user.currentUser
// (user will give userReducer and from there we get the currentUser value  )

export default connect(mapStateToProps)(Header); // The first argument of connect is a function that allows us to access the state
//  with the state being our  root reducer

// The mapStateToProps and the connect we would use anywhere we need properties from our reducers
