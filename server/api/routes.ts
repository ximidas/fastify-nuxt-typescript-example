module.exports = async (fastify: any, opts: any) => {
	fastify.get(
		'/ping',
		{
			schema: {
				description: 'Check API availability',
				response: {
					200: {
						content: 'plain/text',
						example: 'OK!',
						type: 'string'
					}
				},
				summary: 'Check API availability',
				tags: ['Basic']
			}
		},
		(request: any, reply: any) => {
			console.log('pong');
			reply.send('pong');
		}
	);
	// Example of how to register sub routes in separate files
	// .register(require("./user/index"), { prefix: "/users" })
};
