import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

import { IndexComponent } from './index/index.component';

import { ViewComponent } from './view/view.component';

import { CreateComponent } from './create/create.component';

import { EditComponent } from './edit/edit.component';

  

const routes: Routes = [

  { path: '', redirectTo: 'post/index', pathMatch: 'full'},

  { path: 'post/index', component: IndexComponent },

  { path: 'post/:postId/view', component: ViewComponent },

  { path: 'post/create', component: CreateComponent },

  { path: 'post/:postId/edit', component: EditComponent } 

];

  

@NgModule({

  imports: [RouterModule.forChild(routes)],

  exports: [RouterModule]

})

export class PostRoutingModule { }