exports.up = async function(knex) {
	await knex.schema.createTable("boyNames", (table) => {
		table.increments()
		table.text("name").notNullable()
    })
    
    await knex.schema.createTable("girlNames", (table) => {
		table.increments()
		table.text("name").notNullable()
    })
    
    await knex.schema.createTable("genderNeutralNames", (table) => {
		table.increments()
		table.text("name").notNullable()
	})
}

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists("boyNames")
    await knex.schema.dropTableIfExists("girlNames")
	await knex.schema.dropTableIfExists("genderNeutralNames")

}
