const mongoose=require("mongoose");
try {
    
    mongoose.connect("mongodb://localhost:27017/curso-basico-mern",{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    console.log("MongoDB conectado com sucesso");
} catch (error) {
    console.log(`Error de conexão, ${error}`)
}

