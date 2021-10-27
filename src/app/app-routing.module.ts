import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard'
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: 'purchaseOrders',
    loadChildren: () => import('./purchase-orders/purchase-orders.module').then(m => m.PurchaseOrdersModule)
  },
  {
    path: 'shipments',
    loadChildren: () => import('./shipments/shipments.module').then(m => m.ShipmentsModule)
  },
  {
    path: 'cases',
    loadChildren: () => import('./cases/cases.module').then(m => m.CasesModule)
  },
  {
    path: 'containers',
    loadChildren: () => import('./containers/containers.module').then(m => m.ContainersModule)
  },
  {
    path: 'trains',
    loadChildren: () => import('./trains/trains.module').then(m => m.TrainsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
