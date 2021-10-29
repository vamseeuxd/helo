import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ShipmentsRoutingModule} from './shipments-routing.module';
import {ShipmentsComponent} from './shipments.component';
import {StoreModule} from "@ngrx/store";
import {reducer, shipmentFeatureKey} from "./store/reducer/shipment.reducer";
import {MaterialModule} from "../material.module";


@NgModule({
  declarations: [
    ShipmentsComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature(shipmentFeatureKey, reducer),
    ShipmentsRoutingModule,
    MaterialModule
  ]
})
export class ShipmentsModule {
}
