import React, { useEffect, useRef } from "react";
import CartItem from "./CartItem";

const Cart = (props) => {
	const modalRef = useRef(null);

	/**
	 * Shows the cart as a modal element.
	 */
	useEffect(() => {
		const modalElement = modalRef.current;
		modalElement.showModal();
	});

	/**
	 * Inserts cart items from cart map.
	 * @returns the cart items to the website.
	 */
	function insertCartItems() {
		let cartItemsToInsert = [];
		let i = 0;
		props.myMap.forEach((value, key) => {
			cartItemsToInsert.push(
				<CartItem 
					title={key}
					quantity={value[0]}
					price={value[1]}
					removeFromTotalPrice={props.removeFromTotalPrice}
					removeFromMap={props.removeFromMap}
					key={i}
					setUpdateItems={props.setUpdateItems}
				/>
			);
			i++;
		});
		return <div>{cartItemsToInsert}</div>;
	}

	return(
		<dialog ref={modalRef} className="modal">
			<div id="modal-info">
				<h3>KASSA</h3>
				<button onClick={props.hideCartModal}>X</button>
			</div>
			<div id="items">
				<div className="cartItems">
					<h4>VAROR</h4>
					{insertCartItems()}
					<div id="total-price"><h5>TOTALT: {props.totalPrice}:-</h5></div>
				</div>
				<div className="cartItems">
					<h4>UPPGIFTER</h4>
					<div className="order-form">
							<div className="input-container">
								<label htmlFor="name">Namn</label>
								<input type="text" className="input" id="name" name="name" />
							</div>

							<div className="input-container">
								<label htmlFor="mail">Mailadress</label>
								<input type="text" className="input" id="mail" name="mail" />
							</div>

							<div className="input-container">
								<label htmlFor="phone">Telefonnummer</label>
								<input type="tel" className="input" id="phone" name="phone" />
							</div>

							<div className="input-container">
								<label htmlFor="message">Upplysning</label>
								<textarea className="input" id="message" name="message"></textarea>
							</div>
							<input id="send-order-button" type="submit" value="Skicka beställning" />
						</div>
				</div>
			</div>
		</dialog>
	);
}

export default Cart;