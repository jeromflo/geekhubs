import { Component, ContentChild, OnInit, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {
  @ContentChild('tittle', { static: false }) public tittle: TemplateRef<HTMLElement> | undefined;
  @ContentChild('textBody', { static: false }) public textBody: TemplateRef<HTMLElement> | undefined;
  @ContentChild('textMini', { static: false }) public textMini: TemplateRef<HTMLElement> | undefined;
  @ContentChild('bottom', { static: false }) public bottom: TemplateRef<HTMLElement> | undefined;
  @ContentChild('cardHeader', { static: false }) public cardHeader: TemplateRef<HTMLElement> | undefined;
  @ContentChild('cardBody', { static: false }) public cardBody: TemplateRef<HTMLElement> | undefined;
  constructor() { }
}
