import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';
import { PageComponent } from './page/page.component';
import { MatIconModule } from '@angular/material/icon';
import { ProviderService } from '../shared/services/provider.service';
import { RatingComponent } from '../shared/components/rating/rating.component';

const routes: Routes = [
  {
    path: "",
    component: PageComponent,
    children: [
      { path: ":id", component: DetailComponent }
    ]
  }
]
const components = [
  ListComponent,
  DetailComponent,
  PageComponent,
  RatingComponent
]
@NgModule({
  declarations: components,
  imports: [
    CommonModule,
    FormsModule,
    MatIconModule,
    RouterModule.forChild(routes)
  ],
  providers: [ProviderService]
})
export class ProvidersModule { }
