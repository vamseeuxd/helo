import {createFeatureSelector, createSelector} from '@ngrx/store';
import * as fromShipment from '../reducer/shipment.reducer';

export const selectShipmentsState = createFeatureSelector<fromShipment.ShipmentState>(
  fromShipment.shipmentFeatureKey,
);
export const selectShipments = createSelector(
  selectShipmentsState,
  (state: fromShipment.ShipmentState) => state.shipments
);
