import { Component, OnInit, Input } from '@angular/core';
import { ItemDetails } from '../character'

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})

export class ItemComponent implements OnInit {
  @Input() name: string;
  @Input() item: ItemDetails;

    constructor() {}

  ngOnInit() {}

}
