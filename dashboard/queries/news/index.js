const getNewsQuery = require('queries/news/get-news-query.js');
const getNewQuery = require('queries/news/get-new-query.js');
const deleteNewQuery = require('queries/news/delete-new-query.js');
const updateNewQuery = require('queries/news/update-new-query.js');
const createNewQuery = require('queries/news/create-new-query.js');

module.exports = {
	getNewQuery,
	getNewsQuery,
	deleteNewQuery,
	updateNewQuery,
	createNewQuery,
};
