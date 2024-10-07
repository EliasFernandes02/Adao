import express from "express"
import * as usuarioController from "../controllers/usuariosController.js"


const route = express.Router()

route.get("/",usuarioController.getAll)

export default route