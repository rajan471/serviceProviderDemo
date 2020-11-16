import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './shared/components/header/header.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';

const components = [
  HeaderComponent,
  PageNotFoundComponent
];
const routes: Routes = [
  {
    path: "",
    loadChildren: () => import("./providers/providers.module").then((m) => m.ProvidersModule)
  },
  {
    path: "**", component: PageNotFoundComponent
  }
];

@NgModule({
  declarations: components,
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule, ...components]
})
export class AppRoutingModule { }
