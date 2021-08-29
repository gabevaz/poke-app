import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';

import { ListComponent } from './pages/list/list.component';
import { DetailsComponent } from './pages/details/details.component';
import { PokemonRoutingModule } from './pokemon-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { HeaderHomeComponent } from './components/header-home/header-home.component';
import { CardComponent } from './components/card/card.component';

@NgModule({
  declarations: [ListComponent, DetailsComponent, HeaderHomeComponent, CardComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    PokemonRoutingModule,
    NgxPaginationModule,
    SharedModule,
  ],
})
export class PokemonModule {}
