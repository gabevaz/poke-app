import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HeaderHomeComponent } from './components/header-home/header-home.component';
import { NoResultsComponent } from './components/no-results/no-results.component';
import { InputSearchComponent } from './components/input-search/input-search.component';

@NgModule({
  declarations: [HeaderHomeComponent, NoResultsComponent, InputSearchComponent],
  imports: [CommonModule, FormsModule],
  exports: [HeaderHomeComponent, NoResultsComponent, InputSearchComponent],
})
export class SharedModule {}
