exports.seed = async function(knex) {
	await knex("girlNames").truncate()
	await knex("girlNames").insert([
		{ name: "Savannah" },
		{ name: "Holly" },
		{ name: "Sierra" },
		{ name: "Himilaya" },
	])
}
