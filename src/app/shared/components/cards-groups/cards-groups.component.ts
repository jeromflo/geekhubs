import { Component, ContentChild, Input, TemplateRef } from '@angular/core';
import { Item } from '../../interfaces/item';

@Component({
  selector: 'app-cards-groups',
  templateUrl: './cards-groups.component.html',
  styleUrls: ['./cards-groups.component.css']
})
export class CardsGroupsComponent {
  @Input() items: Item[] = [];
  @Input() disabled: null | true = null;
  @ContentChild('button') button: TemplateRef<HTMLElement> | null = null;
  constructor() {
  }

}
