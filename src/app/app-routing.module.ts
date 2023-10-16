import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImpressPageComponent } from './impressum/impress-page/impress-page.component';
import { DataPolicyComponent } from './data-policy/data-policy.component';

const routes: Routes = [
  { path: 'impress', component: ImpressPageComponent },
  { path: 'data-policy', component: DataPolicyComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
