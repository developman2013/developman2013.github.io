
import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-card',
    imports: [],
    templateUrl: './card.component.html',
    styleUrl: './card.component.css'
})
export class CardComponent implements OnInit {
  @Input() header: string = "";
  @Input() description: string = "";
  @Input() imgUrl: string = "";
  @Input() extUrl: string = "";
  @Input() tag: string = "";

  public descriptionArr: string[] = new Array();

  ngOnInit() {
    this.descriptionArr = this.description.split("\n");
  }

}
