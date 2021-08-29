import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderHomeComponent } from './components/header-home/header-home.component';
import { NoResultsComponent } from './components/no-results/no-results.component';

@NgModule({
  declarations: [HeaderHomeComponent, NoResultsComponent],
  imports: [CommonModule],
  exports: [HeaderHomeComponent, NoResultsComponent],
})
export class SharedModule {}
