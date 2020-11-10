import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() data;

  starCount = [];
  countryFlags = [];

  constructor() { }

  ngOnInit(): void {
    this.starCount = Array(Math.floor(this.data.header.stars)).fill(1);
    if (Math.floor(this.data.header.stars) < Math.ceil(this.data.header.stars)) {
      this.starCount.push(0);
    }

    if (this.data.countryFlags.length > 0) {
      const circleCenterX = 50; // relative to parent div - top left corner
      const circleCenterY = 63; // relative to parent div - top left corner
      const currentAngle = Math.PI / (2 * 4); // ~22 degree
      const leftBaseAngle = Math.PI; // 180 degree

      const currentCenter = Math.ceil(this.data.countryFlags.length / 2); // middle flag on 180 degree
      const radius = 68;

      this.countryFlags = this.data.countryFlags.map((item, index) => {

        let angleForPoint;
        let topPosition;
        let leftPosition;
        let direction;

        direction = index < currentCenter ? -1 : 1; // one half will be placed up from 180, other below

        angleForPoint = leftBaseAngle + direction * ((currentCenter - index - 1) * currentAngle);
        console.log('angleForPoint : ', angleForPoint);
        console.log('Math.cos(angleForPoint): ', Math.cos(angleForPoint));
        console.log('Math.sin(angleForPoint): ', Math.sin(angleForPoint));
        console.log('radius * Math.cos(angleForPoint): ', radius * Math.cos(angleForPoint));
        console.log('radius * Math.sin(angleForPoint): ', radius * Math.sin(angleForPoint));
        leftPosition = circleCenterX + radius * Math.cos(angleForPoint);
        topPosition = circleCenterY + direction * radius * Math.sin(angleForPoint);
        console.log('leftPosition: ', leftPosition);
        console.log('topPosition: ', topPosition);

        return {
          flag: item,
          top: `${topPosition}px`,
          left: `${leftPosition}px`
        };
      });
    }
  }

}
