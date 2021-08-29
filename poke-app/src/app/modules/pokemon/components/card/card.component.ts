import { Component, Input } from '@angular/core';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() link: string = '/';
  @Input() linkParam: string = '';
  @Input() imageUrl: string = '';
  @Input() title: string = '';

  constructor() {}
}
