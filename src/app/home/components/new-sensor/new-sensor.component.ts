import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SensorsService } from 'src/app/services/sensors-service.service';

import { Sensor } from '../../models/sensors';

@Component({
  selector: 'app-new-sensor',
  templateUrl: './new-sensor.component.html',
  styleUrls: ['./new-sensor.component.scss'],
})
export class NewSensorComponent implements OnInit {
  newSensor: Sensor;
  createNewSensor: FormGroup;

  constructor(
    private dialogRef: MatDialogRef<NewSensorComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Sensor,
    private _sensorService: SensorsService
  ) {}

  ngOnInit(): void {
    this.newSensor = new Sensor();
    this.buildNewSensorFormGroup();
  }

  buildNewSensorFormGroup() {
    this.createNewSensor = new FormGroup({
      DeviceId: new FormControl('', [
        Validators.required,
        Validators.pattern('^[0-9]*$'),
      ]),
      DeviceType: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(10),
        Validators.pattern('^[a-zA-Z ]*$'),
      ]),
      DeviceTypeHebrew: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(10),
        Validators.pattern(`^[\u0590-\u05FF\u200f\u200e' ]+$`),
      ]),
      WebSiteDeviceName: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(10),
      ]),
      Picture: new FormControl(''),
      ManufacturerName: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(10),
        Validators.pattern('^[a-zA-Z ]*$'),
      ]),
      InstallDate: new FormControl('', [Validators.required]),
      LastReportDate: new FormControl('', [Validators.required]),
      ComponentOk: new FormControl(0, [Validators.required]),
    });
  }

  onCancelClick(): void {
    this.dialogRef.close();
  }

  handleFileInput(fileToUpload: File): void {
    if (fileToUpload) {
      const fileName = fileToUpload.name;
      this._sensorService.saveImg(fileToUpload);
      console.log(fileName);
      this.newSensor.Picture = fileName;
    }
  }

  addSensor() {
    if (this.createNewSensor.valid) {
      if (this.createNewSensor.get('Picture')) {
        const file: File = this.createNewSensor.get('Picture')?.value;
        this.handleFileInput(file);
      }

      this.dialogRef.close(this.newSensor);
    }
  }
}
