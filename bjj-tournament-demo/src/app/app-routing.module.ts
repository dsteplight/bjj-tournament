import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DummyComponent }   from './dummy.component';
import { NotFoundComponent }   from './notfound.component';

const routes: Routes = [
  { path: '', redirectTo: '/tournaments', pathMatch: 'full' },
  { path: 'tournaments',  component: DummyComponent },
  { path: '**',  component: NotFoundComponent }
];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
