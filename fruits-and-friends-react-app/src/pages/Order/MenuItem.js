import React, { useEffect, useState } from "react";

const MenuItem = (props) => {
	const [numberOfItems, setNumberOfItems] = useState(0);
	const [hideElement, setHideElement] = useState(false);
	const [showElement, setShowElement] = useState(false);

	/**
	 * Updates number of items when changing selection option.
	 * @param {option} e - the user chosen option.
	 */
	function handleChange(e) {
		setNumberOfItems(e.target.value);
	}

	/**
	 * Adds menu item to cart.
	 */
	function addMenuItem() {
		if (numberOfItems > 0) {
			let quantityPrice = (numberOfItems*(Number(props.price)));
			props.addToTotalPrice(quantityPrice);
			setHideElement(true);
			setShowElement(true);
			let values = [numberOfItems, quantityPrice];
			props.addToMap(props.title, values);
		}
	}

	/**
	 * Removes menu item from cart.
	 */
	function removeMenuItem() {
		let quantityPrice = (numberOfItems*(Number(props.price)));
		props.removeFromTotalPrice(quantityPrice);
		restoreMenuItem();
		props.removeFromMap(props.title)
	}

	/**
	 * Restores the menu item.
	 */
	function restoreMenuItem() {
		setNumberOfItems(0);
		setHideElement(false);
		setShowElement(false);
	}

	/**
	 * Restores the menu item if removed from cart.
	 */
	useEffect(() => {
		if (props.updateItems === true) {
			if (!(props.myMap.has(props.title))) {
				restoreMenuItem();
			}
			props.setUpdateItems(false);
		}
	});

	return (
		<div className="menuItem">
			<div className="menuItemInfo">
				<h4>{props.title}</h4>
				<p>{props.description}</p>
				<p>{props.price}:-</p>
			</div>
			<div className="menuItemChoice">
				{ hideElement ? null : 
				<select id="numberOf" value={numberOfItems} onChange={handleChange}>
					<option value="0">0</option>
					<option value="1">1</option>
					<option value="2">2</option>
					<option value="3">3</option>
					<option value="4">4</option>
					<option value="5">5</option>
					<option value="6">6</option>
					<option value="7">7</option>
					<option value="8">8</option>
					<option value="9">9</option>
					<option value="10">10</option>
				</select> }
				{ showElement ? <p id="numberOfChosenItems">{numberOfItems}</p> : null }

				{ hideElement ? null : <button id="add" onClick={addMenuItem}>Lägg till</button> }
				{ showElement ? <button id="remove" onClick={removeMenuItem}>Ta bort</button> : null }
			</div>
		</div>
	);
}

export default MenuItem;