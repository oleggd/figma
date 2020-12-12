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
  visibleCountryFlags = [];

  constructor() { }

  ngOnInit(): void {
    this.starCount = Array(Math.floor(this.data.header.stars)).fill(1);
    if (Math.floor(this.data.header.stars) < Math.ceil(this.data.header.stars)) {
      this.starCount.push(0);
    }

    this.countryFlags = this.calcCountriesPlacement(this.data.countryFlags);
    this.visibleCountryFlags = this.countryFlags.slice();
  }

  calcCountriesPlacement(countryFlags): [any] {
    if (countryFlags.length > 0) {
      const circleCenterX = 50; // relative to parent div - top left corner
      const circleCenterY = 63; // relative to parent div - top left corner
      const currentAngle = Math.PI / (2 * 4); // ~22 degree
      const leftBaseAngle = Math.PI; // 180 degree

      const currentCenter = Math.ceil(countryFlags.length / 2); // middle flag on 180 degree
      const radius = 68;

      return countryFlags.map((item, index) => {

        let angleForPoint;
        let topPosition;
        let leftPosition;
        let direction;

        direction = index < currentCenter ? -1 : 1; // one half will be placed up from 180, other below

        angleForPoint = leftBaseAngle + direction * ((currentCenter - index - 1) * currentAngle);
        leftPosition = circleCenterX + radius * Math.cos(angleForPoint);
        topPosition = circleCenterY + direction * radius * Math.sin(angleForPoint);

        return {
          flag: item,
          top: `${topPosition}px`,
          left: `${leftPosition}px`
        };
      });
    }
  }

  onChangeCountries(): void {
    const countryFlagsLength = this.visibleCountryFlags.length;
    let localArray = [];

    if (countryFlagsLength > 1) {
      localArray = this.visibleCountryFlags.map((item) => item.flag).slice(0, countryFlagsLength - 2);
      localArray = this.calcCountriesPlacement(localArray);
      this.visibleCountryFlags = localArray.slice();
    } else {
      this.visibleCountryFlags = this.countryFlags.slice();
    }
  }

  onEdit(): void {
    console.log('onEdit');
  }
}
