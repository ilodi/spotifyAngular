import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthModule } from './modules/auth/auth.module';
import { HomePageComponent } from './modules/home/pages/home-page/home-page.component';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () =>
      import(`./modules/auth/auth.module`).then((m) => m.AuthModule),
  },
  {
    path: '',
    //vas a importar y luego tomaras ese modulo
    component: HomePageComponent,
    loadChildren: () =>
      import(`./modules/home/home.module`).then((m) => m.HomeModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
