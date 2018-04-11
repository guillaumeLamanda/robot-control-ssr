// Any route that comes in, send it to the universalLoader

import express from "express"
import universalLoader from "../universal"
import api from "./api"

const router = express.Router()

router.get("/", universalLoader)

export default router
