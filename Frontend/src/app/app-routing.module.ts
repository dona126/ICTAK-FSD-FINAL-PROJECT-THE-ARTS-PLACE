import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes,RouterModule} from '@angular/router';
import { AuthGuard } from './auth.guard';
import { ProductsComponent } from './products/products.component'
import { NewProductComponent } from './newproduct/newproduct.component';
import {LoginComponent} from './login/login.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { SignupComponent } from './signup/signup.component';
import { ArtComponent } from './art/art.component';
import { HomeComponent } from './home/home.component';
import { NewarticleComponent } from './newarticle/newarticle.component';
import { NewvideoComponent } from './newvideo/newvideo.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: '/products',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'art',
    component: ArtComponent
  },
  {path:'add', 
  canActivate: [AuthGuard],
  component: NewProductComponent
},
{path:'article', 
  canActivate: [AuthGuard],
  component: NewarticleComponent
},
{path:'video', 
  canActivate: [AuthGuard],
  component: NewvideoComponent 
},
{
  path:'update',
  component:UpdateProductComponent
}
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
