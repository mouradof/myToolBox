import BaseModel from "./src/db/models/BaseModel.js"
import { serve } from "@hono/node-server"
import { logger } from "hono/logger"
import config from "./config.js"
import { cors } from "hono/cors"
import { Hono } from "hono"
import dotenv from "dotenv"
import knex from "knex"

dotenv.config()

const db = knex(config.db)
BaseModel.knex(db)

const app = new Hono()

app.use(logger())
app.use(
  cors({
    origin: "*",
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowHeaders: ["*"],
    credentials: true
  })
)

serve({
  fetch: app.fetch,
  port: config.port
})

// eslint-disable-next-line no-console
console.log(`Server listening on port ${config.port}`)
