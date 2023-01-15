import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Sensor } from '../../models/sensors';

@Component({
  selector: 'app-new-sensor',
  templateUrl: './new-sensor.component.html',
  styleUrls: ['./new-sensor.component.scss'],
})
export class NewSensorComponent implements OnInit {
  fileToUpload: File | null = null;

  constructor(
    private dialogRef: MatDialogRef<NewSensorComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Sensor
  ) {}

  ngOnInit(): void {}

  submit() {
    //add DeviceId and add to sensor data list
    console.log(this.data);
    this.dialogRef.close();
  }

  onCancelClick(): void {
    this.dialogRef.close();
  }

  handleFileInput(target: any): void {
    this.fileToUpload = target.files[0];
  }
}
