exports.seed = async function(knex) {
	await knex("boyNames").truncate()
	await knex("boyNames").insert([
		{ name: "River" },
		{ name: "James" },
		{ name: "Kai" },
		{ name: "Oliver" },
	])
}
