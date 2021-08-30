import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { debounceTime, map, distinctUntilChanged } from 'rxjs/operators';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'input-search',
  templateUrl: './input-search.component.html',
  styleUrls: ['./input-search.component.scss'],
})
export class InputSearchComponent implements OnInit {
  @ViewChild('fieldSearch', { static: true }) fieldSearch: ElementRef;
  @Output() inputValue = new EventEmitter<string>();

  inputSearchValue: any = '';

  constructor() {}

  private sendValue(): void {
    this.inputValue.emit(this.inputSearchValue);
  }

  cleanInputSearch(): void {
    this.inputSearchValue = '';
    this.sendValue();
  }

  ngOnInit(): void {
    this.setEventToInput();
  }

  setEventToInput(): void {
    fromEvent(this.fieldSearch.nativeElement, 'keyup')
      .pipe(
        map((event: any) => {
          return event.target.value;
        }),
        debounceTime(1000),
        distinctUntilChanged()
      )
      .subscribe((text: string) => {
        this.sendValue();
      });
  }
}
