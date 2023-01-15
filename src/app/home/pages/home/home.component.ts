import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { SensorsService } from 'src/app/services/sensors-service.service';
import { NewSensorComponent } from '../../components/new-sensor/new-sensor.component';
import { Sensor } from '../../models/sensors';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  sensors: Sensor[] = [];
  columns: number;

  constructor(
    private _sensorsService: SensorsService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this._sensorsService.getSensors().subscribe((data) => {
      this.sensors = data.components;
    });

    this.breakPoints();
  }

  //networks
  getSensorComponentOk(value: number): number {
    return this.sensors.filter((sensor) => sensor.ComponentOk === value).length;
  }

  //actions
  breakPoints() {
    switch (true) {
      case window.innerWidth <= 480:
        this.columns = 1;
        break;
      case window.innerWidth > 480 && window.innerWidth <= 640:
        this.columns = 2;
        break;
      case window.innerWidth > 640 && window.innerWidth <= 992:
        this.columns = 2;
        break;
      case window.innerWidth > 992 && window.innerWidth <= 1024:
        this.columns = 3;
        break;
      default:
        this.columns = 4;
    }
  }

  onResize() {
    this.breakPoints();
  }

  //modal dialog
  openNewSensorModal(): void {
    const dialogRef = this.dialog.open(NewSensorComponent, {
      width: '50%',
      height: 'auto',
    });

    dialogRef.afterClosed().subscribe((newSensor: Sensor) => {
      if (newSensor) {
        this.sensors.push(newSensor);
      }
    });
  }
}
