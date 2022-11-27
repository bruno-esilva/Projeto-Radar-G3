import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroClientesComponent } from './pages/cadastro-clientes/cadastro-clientes.component';
import { CadastroPedidosComponent } from './pages/cadastro-pedidos/cadastro-pedidos.component';
import { CadastroProdutosComponent } from './pages/cadastro-produtos/cadastro-produtos.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'home', component:HomeComponent},
  {path:'cadastro_cliente', component:CadastroClientesComponent},
  {path:'cadastro_produtos', component:CadastroProdutosComponent},
  {path:'cadastro_pedidos', component:CadastroPedidosComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
