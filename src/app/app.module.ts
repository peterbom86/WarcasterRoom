import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UnitCardComponent } from './unit-card/unit-card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardSelectionComponent } from './card-selection/card-selection.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { IsWarjackPipe } from '../app/pipes/IsWarjackPipe';
import { IsWeaverPipe } from './pipes/IsWeaverPipe';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    UnitCardComponent,
    CardSelectionComponent,
    IsWarjackPipe,
    IsWeaverPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
