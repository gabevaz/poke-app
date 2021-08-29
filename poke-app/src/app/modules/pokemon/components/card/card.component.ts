import { Component, Input } from '@angular/core';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() link: string | undefined = '/';
  @Input() linkParam: string | number | undefined = '';
  @Input() imageUrl: string | undefined = '';
  @Input() title: string | undefined = '';

  constructor() {}
}
