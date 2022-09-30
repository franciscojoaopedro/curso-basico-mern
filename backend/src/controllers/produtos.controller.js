const Produto=require("../models/productos.model");


module.exports={
    async index(req,res){
        try {
            const produtos= await Produto.find();
           return res.json({error:false, produtos})
        } catch (error) {
           return res.json({error:true, message:error.message});
        }
    },
    async details(req,res){
        try {
            const {_id}= await req.params;
            const produto= await Produto.findById({_id});
            return res.json({error:false,produto});
        } catch (error) {
          return  res.json({error:true,message:error.message})
        }
    }
    ,
    async create(req,res){
        try {

            const {nome_produto,descricao_produto,preco_produto,qtd_produto}=  await req.body
            let produto={}
            const existProduto= await Produto.findOne({nome_produto});
            if(!existProduto){
                produto={nome_produto,descricao_produto,preco_produto,qtd_produto};
                const produtos= await new Produto(produto).save();  
               return res.json({error:false, produtos})
            }else{
                return res.json({error:true, message:"produto já existe"})
            }
        } catch (error) {
            res.json({error:true, message:error.message})
        }
    },
    async delete(req,res){
        try {
            const {_id}=await req.params;
            await Produto.findByIdAndDelete({_id});
           return res.json({error:false, message:" produto deletado!"})
        } catch (error) {
           return res.json({error:true, message:error.message})
        }
    },
    async update(req,res){
        try {
            const {_id, nome_produto,descricao_produto,preco_produto,qtd_produto}= await req.body;
            const novoProduto={nome_produto,descricao_produto,preco_produto,qtd_produto};
            const produto= await Produto.findByIdAndUpdate({_id},novoProduto,{new:true});
           return res.json({error:false,produto});

        } catch (error) {
           return res.json({error:true,message:error.error})
        }
    }
}