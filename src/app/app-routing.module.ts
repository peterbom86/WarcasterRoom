import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UnitCardComponent } from './unit-card/unit-card.component';
import { CardSelectionComponent } from './card-selection/card-selection.component';
import { ArmybuilderComponent } from './armybuilder/armybuilder.component';


const routes: Routes = [
  { path: '', component: CardSelectionComponent },
  { path: 'unit/:unitId', component: UnitCardComponent },
  { path: 'ab', component: ArmybuilderComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
