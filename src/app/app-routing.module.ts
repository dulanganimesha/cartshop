import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AngularFireAuthGuard, redirectUnauthorizedTo, redirectLoggedInTo } from '@angular/fire/auth-guard';

    const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);
    const redirectLoggedInToHome = () => redirectLoggedInTo(['home']);


const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule), 
    canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin }
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'category',
    loadChildren: () => import('./category/category.module').then( m => m.CategoryPageModule)
  },
  {
    path: 'listproducts',
    loadChildren: () => import('./listproducts/listproducts.module').then( m => m.ListproductsPageModule)
  },
  {
    path: 'viewcart',
    loadChildren: () => import('./viewcart/viewcart.module').then( m => m.ViewcartPageModule)
  },
  {
    path: 'scanlist',
    loadChildren: () => import('./scanlist/scanlist.module').then( m => m.ScanlistPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./authentication/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./authentication/login/login.module').then( m => m.LoginPageModule),
    canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectLoggedInToHome }
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
