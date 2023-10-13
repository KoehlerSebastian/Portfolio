import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImpressPageComponent } from './impressum/impress-page/impress-page.component';

const routes: Routes = [
  {path: 'impress', component: ImpressPageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
