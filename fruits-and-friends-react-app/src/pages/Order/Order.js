import React, { useState } from "react";
import MenuItem from "./MenuItem";
import Cart from "./Cart";
import foodItems from "./foodItems.json"
import drinkItems from "./drinkItems.json"

const Order = () => {
	const [totalPrice, setTotalPrice] = useState(0);
	const [showCart, setShowCart] = useState(false);
	const [cartItems, setCartItems] = useState(new Map());
	const [updateItems, setUpdateItems] = useState(false);

	/**
	 * Inserts menu items from json file based on title, description and price.
	 * @param {json file} menuItemData - json file containing the menu items.
	 * @returns menu items to be inserted on website
	 */
	function insertMenuItems(menuItemData) {
		let menuItemsToInsert = [];
		menuItemData.map((data, id) => (
			menuItemsToInsert.push(
				<div key={id}>
					<MenuItem
						title={data.title}
						description={data.description}
						price={data.price}
						addToTotalPrice={addToTotalPrice}
						removeFromTotalPrice={removeFromTotalPrice}
						addToCart={addToCart}
						removeFromCart={removeFromCart}
						cartItems={cartItems}
						updateItems={updateItems}
						setUpdateItems={setUpdateItems}
					/>
				</div>
			)
		))
		return menuItemsToInsert;
	}

	/**
	 * Adds value to total price.
	 * @param {number} value - the value to add.
	 */
	function addToTotalPrice(value) {
		setTotalPrice(totalPrice + value);
	}

	/**
	 * Subtracts value from total price.
	 * @param {number} value - the value to subtract.
	 */
	function removeFromTotalPrice(value) {
		setTotalPrice(totalPrice - value);
	}

	/**
	 * Shows cart and makes website unscrollable.
	 */
	function showCartModal() {
		setShowCart(true);
		document.body.style.overflow = "hidden";
	}

	/**
	 * Hides cart and makes website scrollable.
	 */
	function hideCartModal() {
		setShowCart(false);
		document.body.style.overflow = "auto";
	}

	/**
	 * Adds item to cart, with title as key and quantity as value[0] and price as value[1].
	 * @param {string} key - title key string.
	 * @param {array} value - value array.
	 */
	function addToCart(key, value) {
		setCartItems(cartItems.set(key, value));
	}

	/**
	* Removes item from cart based on the key title.
	* @param {string} key - title key string.
	*/
	function removeFromCart(key) {
		cartItems.delete(key);
	}

	return (
		<div id="menu-items">
			<div className="hero-img" id="hero-order">
				<div id="hero">
					<h1>BESTÄLL</h1>
				</div>
			</div>
			<main id="order-content">
				<div>
					{/* Inserts menu items */}
					<h2>MAT</h2>
					<div className="order-section">
						{insertMenuItems(foodItems)}
					</div>

					<br /><br /><h2>DRYCK</h2>
					<div className="order-section">
						{insertMenuItems(drinkItems)}
					</div>

					{/* Cart button that displays cart as modal */}
					<br />
					<button id="cart-button" onClick={showCartModal}>Gå till kassan ({totalPrice}:-)</button>
				</div>

				{/* Cart modal component */}
				{showCart ? <Cart
					hideCartModal={hideCartModal}
					totalPrice={totalPrice}
					removeFromTotalPrice={removeFromTotalPrice}
					cartItems={cartItems}
					removeFromCart={removeFromCart}
					setUpdateItems={setUpdateItems}
				/> : null}
			</main>
		</div>
	);
}

export default Order;