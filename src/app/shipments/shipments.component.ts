import {Component, OnInit} from '@angular/core';
import {IShipment} from "./store/interfaces/shipment";
import {Observable} from "rxjs";
import {select, Store} from "@ngrx/store";
import {ShipmentState} from "./store/reducer/shipment.reducer";
import {selectShipmentColumns, selectShipments} from "./store/selectors";
import {addShipment, deleteShipment} from "./store/actions";
import {MatDialog} from "@angular/material/dialog";
import {AddShipmentComponent} from "./add-shipment/add-shipment.component";

@Component({
  selector: 'app-shipments',
  templateUrl: './shipments.component.html',
  styleUrls: ['./shipments.component.scss']
})
export class ShipmentsComponent {
  shipments$: Observable<IShipment[]>;
  shipmentColumns$: Observable<string[]>;

  constructor(
    public dialog: MatDialog,
    private store: Store<ShipmentState>
  ) {
    this.shipments$ = this.store.pipe(select(selectShipments));
    this.shipmentColumns$ = this.store.pipe(select(selectShipmentColumns));
  }

  addNewShipment(newShipmentText: HTMLInputElement) {
    /*this.store.dispatch(addShipment({id: new Date().getTime().toString(), name: newShipmentText.value}));
    newShipmentText.value = '';*/
  }

  deleteShipment(shipment: IShipment) {
    const isConfirm = confirm('Are you sure!Do you want to delete?');
    if(isConfirm){
      this.store.dispatch(deleteShipment(shipment));
    }
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddShipmentComponent, {width: '300px'});
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
