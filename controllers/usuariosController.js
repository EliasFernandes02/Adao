import * as usuarioRepository from "../repository/usuarioRepository.js"

export const getAll = async (req,res) => {
   try{
    const usuarios = await usuarioRepository.getAll()
    res.status(200).send(usuarios)
   }catch(error){
    res.status(500).send(`O erro foi : ${error}`)
   }
} 