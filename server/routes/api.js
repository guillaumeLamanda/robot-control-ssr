// This file includes an optional API common in isomorphic applications
// Of course, you should probably spin up your API elsewhere... but you get the idea

import express from "express"
import serialport from "serialport"

const router = express.Router()
const port = serialport("/dev/ttyACM0", {
  baudrate: 9600
})

router.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*")
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  )
  next()
})

router.get("/", (req, res, next) => {
  res.json({ message: "Hello Word" })
})

router.get("/avancer", (req, res) => {
  port.write("avancer \n")

  port.on("error", error => {
    return res.json({ error })
  })
  port.on("data", data => {
    return res.json({ data })
  })
})

export default router
