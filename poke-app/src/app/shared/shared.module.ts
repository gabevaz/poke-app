import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NoResultsComponent } from './components/no-results/no-results.component';
import { InputSearchComponent } from './components/input-search/input-search.component';
import { LoaderComponent } from './components/loader/loader.component';

@NgModule({
  declarations: [NoResultsComponent, InputSearchComponent, LoaderComponent],
  imports: [CommonModule, FormsModule],
  exports: [NoResultsComponent, InputSearchComponent, LoaderComponent],
})
export class SharedModule {}
