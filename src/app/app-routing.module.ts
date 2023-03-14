import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TransactionsListComponent } from './components/transactions-list/transactions-list.component';
import { UserQuarterlySummaryComponent } from './components/user-quarterly-summary/user-quarterly-summary.component';

const routes: Routes = [
  { path: 'transaction-list', component: TransactionsListComponent },
  { path: 'user-quarterly-summary/:username', component: UserQuarterlySummaryComponent },
  { path: '',   redirectTo: '/transaction-list', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
