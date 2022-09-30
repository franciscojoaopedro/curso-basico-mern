import React from "react";
import{BrowserRouter,Route,Routes} from "react-router-dom";

import  Dashboard from '../pages/admin/dashboard/index';


// IMPORTS ADMIN
import Produtos from "../pages/admin/produtos";
import ProdutosEditar from '../pages/admin/produtos/produto.editar';
import ProdutosCadastrar from '../pages/admin/produtos/produto.cadastrar';

import Usuarios from "../pages/admin/usuarios";
import UsuarioEditar from '../pages/admin/usuarios/usuario.editar';
import UsuarioCadastrar from '../pages/admin/usuarios/usuario.cadastrar';

//  IMPORTS CLIENT
import Home from "../pages/client/home";
import ProdutoDetails from '../pages/client/produtos/produto.details';


const Routas=()=>{
    return(
        <BrowserRouter>
        <Routes>
            {/* ROSTAS CLIENTE */}
            <Route path="/"  element={<Home/>} />
            <Route path="/produtos/:idProduto"  element={<ProdutoDetails/>}/>

            {/* ROTAS ADMIN - PRODUTOS */}
            <Route path="/admin"  element={<Dashboard/>} />

            <Route path={"/admin/produtos"}  element={<Produtos/>} />
            <Route path={"/admin/produtos/cadastrar"}  element={<ProdutosCadastrar/>} />
            <Route path={"/admin/produtos/editar/:idProduto"}  element={<ProdutosEditar/>} />

             {/* ROTAS ADMIN - USUARIO */}
            <Route path="/admin/usuarios"  element={<Usuarios/>} />
            <Route path="/admin/usuarios/cadastrar"  element={<UsuarioCadastrar/>} />
            <Route path="/admin/usuarios/editar/:idUsuario"  element={<UsuarioEditar/>} />

        </Routes>
        </BrowserRouter>
    )
}
export default Routas;