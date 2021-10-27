import {Action, createReducer, on} from '@ngrx/store';
import * as ShipmentActions from '../actions';
import {IShipment} from "../interfaces/shipment";

export const shipmentFeatureKey = 'shipment';

export interface ShipmentState {
  shipments: IShipment[];
}

export const initialState: ShipmentState = {
  shipments: []
};


export const reducer = createReducer(
  initialState,
  on(ShipmentActions.addShipment, (state: ShipmentState, {shipment}) => ({
    ...state,
    shipments: [...state.shipments, shipment]
  })),
  on(ShipmentActions.deleteShipment, (state: ShipmentState, {shipment}) => ({
    ...state,
    shipments: [...state.shipments.filter(d => d.id !== shipment.id)]
  })),
  on(ShipmentActions.updateShipment, (state: ShipmentState, {shipment}) => ({
    ...state,
    shipments: [...state.shipments.map(d => (d.id === shipment.id ? shipment : d))]
  })),
  on(ShipmentActions.getShipment, (state: ShipmentState, {shipments}) => ({...state, shipments: [...shipments]})),
);
