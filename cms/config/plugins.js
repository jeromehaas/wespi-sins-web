// EXPORTS
module.exports = ({ env }) => ({
	'upload': {
		config: {
			provider: 'aws-s3',
			providerOptions: {
				s3Options: {
					accessKeyId: env('SPACE_ACCESS_KEY_ID'),
					secretAccessKey: env('SPACE_ACCESS_SECRET'),
					endpoint: env('SPACE_ENDPOINT'), 
					params: {
						Bucket: env('SPACE_BUCKET'),
					},
				},
			},
		},
	},
	'email': {
		config: {
			provider: 'nodemailer',
			providerOptions: {
				host: env('SMTP_HOST'),
				port: env('SMTP_PORT'),
				auth: {
					user: env('SMTP_USERNAME'),
					pass: env('SMTP_PASSWORD'),
				},
			},
			settings: {
				defaultFrom: process.env.SMTP_SENDER,
				defaultReplyTo: process.env.SMTP_SENDER,
			},
		},
	},
	'strapi-plugin-populate-deep': {
    config: {
      defaultDepth: 5,
    }
  },
});