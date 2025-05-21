import express from 'express'
import { createShortenURLs, getLongURLsByShortId, getURls } from '../controller/URLshorter.js'
const shortenURlRoute = express.Router()

shortenURlRoute.get("/", getURls)
shortenURlRoute.get("/:shortUrlId", getLongURLsByShortId)
shortenURlRoute.post("/create", createShortenURLs)

export default shortenURlRoute