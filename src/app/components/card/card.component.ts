import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() data;

  starCount = [];

  constructor() { }

  ngOnInit(): void {
    this.starCount = Array(Math.floor(this.data.header.stars)).fill(1);
    if (Math.floor(this.data.header.stars) < Math.ceil(this.data.header.stars)) {
      this.starCount.push(0);
    }
  }

}
