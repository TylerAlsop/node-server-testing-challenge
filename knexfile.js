module.exports = {
	development: {
		client: "sqlite3",
		connection: {
			filename: "./data/babyNames.db3",
		},
		useNullAsDefault: true,
		migrations: {
			directory: "./migrations",
		},
		seeds: {
			directory: "./data/seeds",
		},
	},
	testing: {
		client: "sqlite3",
		connection: {
			filename: "./data/babyNames-test.db3",
		},
		useNullAsDefault: true,
		migrations: {
			directory: "./migrations",
		},
		seeds: {
			directory: "./data/seeds",
		},
	},
}