exports.seed = async function(knex) {
	await knex("genderNeutralNames").truncate()
	await knex("genderNeutralNames").insert([
		{ name: "Sam" },
		{ name: "Don Carlos" },
		{ name: "Billie" },
		{ name: "Bobbie" },
	])
}
