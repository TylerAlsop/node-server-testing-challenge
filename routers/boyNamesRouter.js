const express = require("express")
const Boys = require("./boys-model")

const router = express.Router()

router.get("/", async (req, res, next) => {
	try {
		res.json(await Boys.find())
	} catch(err) {
		next(err)
	}
})

router.get("/:id", async (req, res, next) => {
	try {
		const boyName = await Boys.findById(req.params.id)
		if (!boyName) {
			return res.status(404).json({
				message: "The boy's name with that ID could not be found."
			})
		}
		res.json(boyName)
	} catch(err) {
		next(err)
	}
})

router.post("/", async (req, res, next) => {
	try {
		const boyName = await Boys.create(req.body)
		res.status(201).json(boyName)
	} catch(err) {
		next(err)
	}
})

router.delete("/:id", async (req, res, next) => {
    try {
		await Boys.remove(req.params.id)
			.then(() => res.status(204).end())
    } catch (err) {
        next(err)
    }
})



module.exports = router