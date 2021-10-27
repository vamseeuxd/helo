import {createAction, props} from '@ngrx/store';
import {IShipment} from "../interfaces/shipment";

export const addShipment = createAction('[Shipment] ADD', (shipment: IShipment) => ({shipment}));
export const deleteShipment = createAction('[Shipment] DELETE', (shipment: IShipment) => ({shipment}));
export const updateShipment = createAction('[Shipment] UPDATE', (shipment: IShipment) => ({shipment}));
export const getShipment = createAction('[Shipment] GET', (shipments: IShipment[]) => ({shipments}));

