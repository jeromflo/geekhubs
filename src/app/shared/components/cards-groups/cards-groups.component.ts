import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Item } from '../../interfaces/item';

@Component({
  selector: 'app-cards-groups',
  templateUrl: './cards-groups.component.html',
  styleUrls: ['./cards-groups.component.css']
})
export class CardsGroupsComponent {
  @Input() items: Item[] = [];
  @Input() disabled: null | true = null;
  @Input() textButton: string = '';
  @Input() cssButton: string = "btn btn-primary align-self-end";
  @Output() handlcerClick: EventEmitter<Item> = new EventEmitter<Item>();
  constructor() {
  }
  clickMe(item: Item) {
    this.handlcerClick.emit(item);
  }

}
