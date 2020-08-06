import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { GraphsComponent } from './graphs/graphs.component';
import { InvestmentComponent } from './investment/investment.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/list' },
  { path: 'list', component: ListComponent, data: {animation: 'List'} },
  { path: 'graphs', component: GraphsComponent, data: {animation: 'Graphs'} },
  { path: 'investment/:id', component: InvestmentComponent, data: {animation: 'Investment'} },
  { path: '**', pathMatch: 'full', redirectTo: '/list' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
