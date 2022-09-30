const mongoose=require("mongoose");

const DataShema= new mongoose.Schema({
    nome_produto:String,
    descricao_produto:String,
    preco_produto:String,
    qtd_produto:{type:String, default:0}
},{timestamps:true});

const Produto=mongoose.model("Produtos",DataShema);

module.exports=Produto;