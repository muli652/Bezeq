import { Component, Input, OnInit } from '@angular/core';
import { Sensor } from '../../models/sensors';

@Component({
  selector: 'app-sensor-item',
  templateUrl: './sensor-item.component.html',
  styleUrls: ['./sensor-item.component.scss'],
})
export class SensorItemComponent implements OnInit {
  @Input() sensor: Sensor;

  constructor() {}

  ngOnInit(): void {}

  toggleSensorStatus() {
    if (this.sensor.ComponentOk === 1) {
      this.sensor.ComponentOk = 0;
    } else {
      this.sensor.ComponentOk = 1;
    }
  }
}
