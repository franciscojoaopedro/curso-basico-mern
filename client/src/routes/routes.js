import React from "react";
import{BrowserRouter,Switch,Route} from "react-router-dom";

import  Dashboard from '../pages/admin/dashboard/index';


// IMPORTS ADMIN
import Produtos from "../pages/admin/produtos";
import ProdutosEditar from '../pages/admin/produtos/produto.editar';
import ProdutosCadastrar from '../pages/admin/produtos/produto.cadastrar';

import Usuarios from "../pages/admin/usuarios/";
import UsuarioEditar from '../pages/admin/usuarios/usuario.editar';
import UsuarioCadastrar from '../pages/admin/usuarios/usuario.cadastrar';

//  IMPORTS CLIENT
import Home from "../pages/client/home";
import ProdutoDetails from '../pages/client/produtos/produto.details';


const Routes=()=>{
    return(
        <BrowserRouter>
        <Switch>
            {/* ROSTAS CLIENTE */}
            <Route path={"/"} exact component={Home} />
            <Route path={"/produtos/:idProduto"} exact component={ProdutoDetails}/>

            {/* ROTAS ADMIN - PRODUTOS */}
            <Route path={"/admin"} exact component={Dashboard} />

            <Route path={"/admin/produtos"} exact component={Produtos} />
            <Route path={"/admin/produtos/cadastrar"} exact component={ProdutosCadastrar} />
            <Route path={"/admin/produtos/editar/:idProduto"} exact component={ProdutosEditar} />

             {/* ROTAS ADMIN - USUARIO */}
            <Route path={"/admin/usuarios"} exact component={Usuarios} />
            <Route path={"/admin/usuarios/cadastrar"} exact component={UsuarioCadastrar} />
            <Route path={"/admin/usuarios/editar/:idUsuario"} exact component={UsuarioEditar} />


        </Switch>
        </BrowserRouter>
    )
}
export default Routes;