import React from "react";

const CartItem = (props) => {
	/**
	 * Removes cart item.
	 */
	function removeCartItem() {
		props.removeFromCart(props.title);
		props.removeFromTotalPrice(props.price);
		props.setUpdateItems(true);
	}

	return (
		/* Cart item information and remove button option */
		<div id="cart-item">
			<div>
				<h4>{props.title}</h4>
				<h5>{props.price}:-</h5>
			</div>
			<div id="price-and-option">
				<p>({props.quantity} st à {(props.price)/(props.quantity)}:-)</p>
				<button className="remove-from-cart" onClick={removeCartItem}>Ta bort</button>
			</div>
		</div>
	);
}

export default CartItem;