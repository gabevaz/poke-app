import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';

import { ListComponent } from './pages/list/list.component';
import { DetailsComponent } from './pages/details/details.component';
import { PokemonRoutingModule } from './pokemon-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ListComponent, DetailsComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    PokemonRoutingModule,
    NgxPaginationModule,
    FormsModule,
  ],
})
export class PokemonModule {}
