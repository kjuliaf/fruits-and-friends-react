import React from "react";

const CartItem = (props) => {
	/**
	 * Removes cart item.
	 */
	function removeCartItem() {
		props.removeFromMap(props.title);
		props.removeFromTotalPrice(props.price);
		props.setUpdateItems(true);
	}

	return (
		/* Cart item information and remove button option */
		<div id="cart-item">
			<h4>{props.quantity} x {props.title}</h4>
			<div id="price-and-option">
				<p>{props.price}:-</p>
				<button className="remove-from-cart" onClick={removeCartItem}>Ta bort</button>
			</div>
		</div>
	);
}

export default CartItem;