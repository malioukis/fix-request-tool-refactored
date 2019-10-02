import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { GenericComponent } from './features/components/generic/generic.component';
import { GenericPresentationalComponent } from './features/views/generic/generic-presentational.component';

const routes: Routes = [
  { path: '', redirectTo: '/generic', pathMatch: 'full' },

  { path: 'generic', component: GenericPresentationalComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
