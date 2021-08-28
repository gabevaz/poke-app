import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListComponent } from './pages/list/list.component';
import { DetailsComponent } from './pages/details/details.component';

@NgModule({
  declarations: [ListComponent, DetailsComponent],
  imports: [CommonModule],
})
export class PokemonModule {}
