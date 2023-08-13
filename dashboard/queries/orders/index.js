const getOrdersQuery = require('queries/orders/get-orders-query.js');
const getOrderQuery = require('queries/orders/get-order-query.js');
const deleteOrderQuery = require('queries/orders/delete-order-query.js');
const updateOrderQuery = require('queries/orders/update-order-query.js');

module.exports = {
	getOrderQuery,
	getOrdersQuery,
	deleteOrderQuery,
	updateOrderQuery,
};
