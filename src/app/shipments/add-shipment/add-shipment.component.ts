import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Store} from "@ngrx/store";
import {ShipmentState} from "../store/reducer/shipment.reducer";
import {NgForm} from "@angular/forms";
import {addShipment} from "../store/actions";

@Component({
  selector: 'app-add-shipment',
  templateUrl: './add-shipment.component.html',
  styleUrls: ['./add-shipment.component.scss']
})
export class AddShipmentComponent {

  constructor(
    private store: Store<ShipmentState>,
    public dialogRef: MatDialogRef<AddShipmentComponent>
  ) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  addShipment(sampleForm: NgForm) {
    this.store.dispatch(addShipment(sampleForm.value));
    sampleForm.resetForm({});
    this.dialogRef.close();
  }
}
