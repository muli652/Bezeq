//angular.module
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

//material
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDialogModule } from '@angular/material/dialog';

//local components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/pages/home/home.component';
import { SensorItemComponent } from './home/components/sensor-item/sensor-item.component';
import { NewSensorComponent } from './home/components/new-sensor/new-sensor.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SensorItemComponent,
    NewSensorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatGridListModule,
    BrowserAnimationsModule,
    FormsModule,
    MatDialogModule,
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
