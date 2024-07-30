import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LogInComponent } from './log-in/log-in.component';
import { ProvinceAutocompleteComponent } from './province-autocomplete/province-autocomplete.component';
import { TownComponent } from './town/town.component';
const routes: Routes = [
  {
      path: 'home',
      component: HomeComponent
  },
  {
    path: '',
    component: LogInComponent
  },
  {
    path: 'province-automplete',
    component: ProvinceAutocompleteComponent
  },
  {
    path: 'town',
    component: TownComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
