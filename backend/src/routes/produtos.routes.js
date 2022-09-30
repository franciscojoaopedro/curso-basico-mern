const express=require("express")
const routes=express.Router();
const Produto=require("../controllers/produtos.controller");


// Rotas de Produtos
routes.get("/api/produtos",Produto.index);
routes.post("/api/produtos/adicionar",Produto.create);
routes.get("/api/produtos.details/:_id",Produto.details);
routes.delete("/api/produtos/delete/:_id",Produto.delete);
routes.put("/api/produtos/update",Produto.update);

module.exports=routes;