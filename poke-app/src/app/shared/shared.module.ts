import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NoResultsComponent } from './components/no-results/no-results.component';
import { InputSearchComponent } from './components/input-search/input-search.component';

@NgModule({
  declarations: [NoResultsComponent, InputSearchComponent],
  imports: [CommonModule, FormsModule],
  exports: [NoResultsComponent, InputSearchComponent],
})
export class SharedModule {}
