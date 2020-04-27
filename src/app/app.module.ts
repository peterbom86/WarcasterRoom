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
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { ArmybuilderComponent } from './armybuilder/armybuilder.component';
import { SelectFactionAndPointsDialogComponent } from './armybuilder/select-faction-and-points-dialog/select-faction-and-points-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';

@NgModule({
  declarations: [
    AppComponent,
    UnitCardComponent,
    CardSelectionComponent,
    IsWarjackPipe,
    IsWeaverPipe,
    ArmybuilderComponent,
    SelectFactionAndPointsDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    MatDialogModule,
    MatFormFieldModule,
    FormsModule,
    MatRadioModule,
    MatInputModule,
    MatButtonModule,
    MatRippleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
