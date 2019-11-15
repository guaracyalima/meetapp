module.exports {
	dialect: 'postgres',
	host: 'localhost',
	user: 'postgres',
	password: 'docker',
	database: 'meetapp',
	define: {
		timestamps: true,
		underscored: true,
		underscoredAll: true,
	},
}
