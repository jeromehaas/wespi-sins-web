// IMPORTS
const { createCoreController } = require('@strapi/strapi').factories;

// EXPORTS
module.exports = createCoreController('api::order.order', ({ strapi }) => ({

	// SEND
	async create(ctx) {

		// TRY-CATCH BLOCK
		try {

			// GET DATA BODY
			const data = ctx.request.body;

			// CREATE ORDER
			const order = await strapi.entityService.create('api::order.order', {
				data: {
					address: data.order.address,
					positions: data.order.positions,
				},
				populate: ['address', 'positions'],
			});

			// // NOTIFY CUSTOMER
			await strapi.service('api::order.order').notifyCustomer(order);

			// // NOTIFY SHOP
			await strapi.service('api::order.order').notifyShop(order);

			// // SEND RESPONSE
			return order

		// HANDLE ERRORS
		} catch (error) {

			// PRINT ERROR
			console.error(`Error: ${ error }`)

			// SEND RESPONSE
			ctx.status = 500;
			ctx.body = {
				success: false,
				error: error
			};

		};

	},

 }));
