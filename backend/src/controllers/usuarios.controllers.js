const Usuario=require("../models/usuario.model");


module.exports={
    async index(req,res){
        try {
            const usuario= await Usuario.find()
            res.json({error:false, usuario})
           
        } catch (err) {
            res.json({error:true,message:err.message})
        }
    },
    async create(req,res){
        const {nome_usuario,email_usuario,tipo_usuario,senha_usuario}= await req.body;
        let data={}
        let user= await Usuario.findOne({email_usuario})
        if(!user){
            data={nome_usuario,email_usuario,tipo_usuario,senha_usuario}
            user= await Usuario.create(data);
            return res.status(200).json(user)
        }else{
            return res.status(500).json({user});
        }
    },
    async details(req,res){
        try {
          
            const {_id} =req.params;
            if(!_id){
                return  res.json({error:true,message:"usuairo não existe!"})
            }else{
                const usuario= await Usuario.findOne({_id})
              return  res.json({error:false, usuario})
            }
           
        } catch (err) {
            res.json({error:true,message:err.message})
        }
    },
    async delete(req,res){
       try {
            const {_id}=  await req.params;
            await Usuario.findByIdAndDelete({_id},{new:false})
            res.json({error:false,message:" usuario deletado com sucesso"})
        
       } catch (error) {
            res.json({error:true, message:error.message})
       }
    },
    async update(req,res){
        const {_id,nome_usuario,email_usuario,tipo_usuario,senha_usuario}=req.body;
        const data={nome_usuario,email_usuario,tipo_usuario,senha_usuario};
        const usuario= await Usuario.findOneAndUpdate({_id},data,{new:true});
        res.json(usuario);
    }

}

