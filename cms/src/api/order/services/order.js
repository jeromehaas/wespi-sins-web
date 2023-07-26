const { notifyCustomerTemplate, notifyShopTemplate } = require('../templates/index.js');

module.exports = () => {

	const notifyCustomer = async (order) => {

		// TRY-CATCH 
		try {

			// EMAIL TEMPLATE
			const emailTemplate = {
				subject: notifyCustomerTemplate.subject,
				text: notifyCustomerTemplate.text,
				html: notifyCustomerTemplate.html,
			};

			// EMAIL CONFIGS
			const emailConfigs = {
				to: order.address.email,
				from: process.env.SMTP_SENDER,
			};

			// EMAIL VARIABLES
			const emailVariables = {
				data: {
					address: order.address,
					positions: order.positions,
				},
			};

			// SEND EMAIL
				await strapi.plugins.email.services.email.sendTemplatedEmail(
					emailConfigs,
					emailTemplate,
					emailVariables,
				);

		// HANDLE ERRORS
		} catch (error) {

			// PRINT ERROR MESSAGE
			console.log(error.message);

		};

	};

	const notifyShop = async (order) => {
	
		// TRY-CATCH 
		try {

			// EMAIL TEMPLATE
			const emailTemplate = {
				subject: notifyShopTemplate.subject,
				text: notifyShopTemplate.text,
				html: notifyShopTemplate.html,
			};

			// EMAIL CONFIGS
			const emailConfigs = {
				to: process.env.SMTP_RECEIVER,
				from: process.env.SMTP_SENDER,
			};

			// EMAIL VARIABLES
			const emailVariables = {
					address: order.address,
					id: order.id,
			};

			// SEND EMAIL
			await strapi.plugins.email.services.email.sendTemplatedEmail(
				emailConfigs,
				emailTemplate,
				emailVariables,
			);

		// HANDLE ERRORS
		} catch (error) {

			// PRINT ERROR MESSAGE
			console.log(error.message);

		};

	};

	return {
		notifyCustomer,
		notifyShop,
	};

};
