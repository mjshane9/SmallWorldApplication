import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { UserdetailComponent } from './userdetail/userdetail.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'userdetail/:id', component: UserdetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
