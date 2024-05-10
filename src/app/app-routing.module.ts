import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QueryAnalyticsComponent } from './query-analytics/query-analytics.component';

const routes: Routes = [
  {path: 'analytics', component: QueryAnalyticsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
