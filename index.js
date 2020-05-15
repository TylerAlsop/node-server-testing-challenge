const express = require("express")
const cors = require("cors")
const boyNamesRouter = require("./routers/boyNamesRouter")
// const girlNamesRouter = require("./routers/girlNamesRouter")
// const genderNeutralNamesRouter = require("./routers/genderNeutralNamesRouter")


const server = express()
const port = process.env.PORT || 5000

server.use(cors())
server.use(express.json())

server.use("/boys", boyNamesRouter)
// server.use("/girls", girlNamesRouter)
// server.use("/gender-neutral", genderNeutralNamesRouter)



server.get("/", (req, res) => {
	res.json({
		message: "Welcome to my API for baby names!",
	})
})

server.use((err, req, res, next) => {
	console.log(err)
	res.status(500).json({
		message: "Something went wrong",
	})
})

if (!module.parent) {
	server.listen(port, () => {
		console.log(`Running at http://localhost:${port}`)
	})
}


module.exports = server