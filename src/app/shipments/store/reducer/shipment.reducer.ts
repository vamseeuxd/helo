import {Action, createReducer, on} from '@ngrx/store';
import * as ShipmentActions from '../actions';
import {IShipment} from "../interfaces/shipment";

export const shipmentFeatureKey = 'shipment';

export interface ShipmentState {
  shipments: IShipment[];
  displayedColumns: string[];
}

export const initialState: ShipmentState = {
  shipments: [
    {position: 1, city: 'Hyderabad', name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
    {position: 2, city: 'Hyderabad', name: 'Helium', weight: 4.0026, symbol: 'He'},
    {position: 3, city: 'Vizag', name: 'Lithium', weight: 6.941, symbol: 'Li'},
    {position: 4, city: 'Vizag', name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
    {position: 5, city: 'Bhimavaram', name: 'Boron', weight: 10.811, symbol: 'B'},
    {position: 6, city: 'Bhimavaram', name: 'Carbon', weight: 12.0107, symbol: 'C'},
    {position: 7, city: 'Vijayawada', name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
    {position: 8, city: 'Vijayawada', name: 'Oxygen', weight: 15.9994, symbol: 'O'},
    {position: 9, city: 'Thirupathi', name: 'Fluorine', weight: 18.9984, symbol: 'F'},
    {position: 10, city: 'Thirupathi', name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  ],
  displayedColumns: ['position', 'name', 'weight', 'symbol', 'city', 'actions']
};


export const reducer = createReducer(
  initialState,
  on(ShipmentActions.addShipment, (state: ShipmentState, {shipment}) => ({
    ...state,
    shipments: [...state.shipments, {...shipment, position: state.shipments.length + 1}]
  })),
  on(ShipmentActions.deleteShipment, (state: ShipmentState, {shipment}) => ({
    ...state,
    shipments: [...state.shipments.filter(d => d.position !== shipment.position)]
  })),
  on(ShipmentActions.updateShipment, (state: ShipmentState, {shipment}) => ({
    ...state,
    shipments: [...state.shipments.map(d => (d.position === shipment.position ? shipment : d))]
  })),
  on(ShipmentActions.getShipment, (state: ShipmentState, {shipments}) => ({...state, shipments: [...shipments]})),
);
