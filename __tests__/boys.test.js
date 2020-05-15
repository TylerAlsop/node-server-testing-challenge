const supertest = require("supertest")
const server = require("../index")
const db = require("../data/config")

beforeEach (async () => {
    await db.seed.run()
})

afterAll(async () => {
    await db.destroy()
})

describe("boy names integration tests", () => {
    it("GET /boys", async () => {
        const res = await supertest(server).get("/boys")

        expect(res.statusCode).toBe(200)
        expect(res.type).toBe("application/json")
        expect(res.body).toHaveLength(4)
        expect(res.body[0].name).toBe("River")

    })

    it("GET /boys/:id", async () => {

        const res = await supertest(server).get("/boys/2")

        expect(res.statusCode).toBe(200)
        expect(res.type).toBe("application/json")
        expect(res.body.name).toBe("James")

    })

    it("GET /boys/:id (not found)", async () => {
		const res = await supertest(server).get("/boys/5000")
		expect(res.statusCode).toBe(404)
    })
    

    it("POST /boys", async () => {

        const data = { name: "Rupert" }
        const res = await supertest(server).post("/boys").send(data)

        expect(res.statusCode).toBe(201)
        expect(res.type).toBe("application/json")
        expect(res.body.name).toBe("Rupert")

    })

})