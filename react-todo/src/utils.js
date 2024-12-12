// src/utils.js

/**
 * Computes the total price based on quantity and price per item.
 * @param {number} quantity - The number of items.
 * @param {number} pricePerItem - The price of a single item.
 * @returns {number} - The total price.
 */
export const computeTotalPrice = (quantity, pricePerItem) => {
    if (quantity < 0 || pricePerItem < 0) {
        throw new Error("Quantity and price per item must be non-negative.");
    }
    return quantity * pricePerItem;
};

/**
 * Formats a number to a currency string.
 * @param {number} amount - The amount to format.
 * @returns {string} - The formatted currency string.
 */
export const formatCurrency = (amount) => {
    return `$${amount.toFixed(2)}`; // Formats the number to two decimal places
};

/**
 * A simple function to log messages to the console.
 * @param {string} message - The message to log.
 */
export const logMessage = (message) => {
    console.log(message);
};