import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'figma-test';

  cardData = {};

  ngOnInit(): void {
    this.cardData = {
      avatar: '../assets/allyson-felix.jpg',
      countryFlags: [
                  'https://www.flaticon.com/svg/static/icons/svg/197/197374.svg',
                  'https://www.flaticon.com/svg/static/icons/svg/197/197571.svg',
                  'https://www.flaticon.com/svg/static/icons/svg/197/197386.svg',
                  'https://www.flaticon.com/svg/static/icons/svg/197/197626.svg',
                  'https://www.flaticon.com/svg/static/icons/svg/197/197518.svg',
                  'https://www.flaticon.com/svg/static/icons/svg/197/197463.svg',
                  'https://www.flaticon.com/svg/static/icons/svg/197/197632.svg',
                  'https://www.flaticon.com/svg/static/icons/svg/197/197507.svg',
                  'https://www.flaticon.com/svg/static/icons/svg/197/197604.svg'
                ],
      header: {
        name: 'Cristofer Carder Junior',
        stars: 4.5,
        reviewCounts: 234,
        verified: true
      },
      body: {
        description: 'UI\\UX Designer, Web Designer, Mobile App Designer, UI\UX Designer, Web Designer,Mobile App Designer',
        location: {
          city: 'Lviv',
          country: 'Ukraine'
        }
      }
    };
  }
}
