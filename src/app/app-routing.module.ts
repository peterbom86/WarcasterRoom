import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UnitCardComponent } from './unit-card/unit-card.component';
import { CardSelectionComponent } from './card-selection/card-selection.component';


const routes: Routes = [
  { path: '', component: CardSelectionComponent },
  { path: 'unit/:unitId', component: UnitCardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
