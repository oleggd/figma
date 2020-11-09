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
      countries: ['https://img.icons8.com/emoji/2x/monaco-emoji.png',
                  'https://img.icons8.com/emoji/2x/slovenia-emoji.png',
                  'https://img.icons8.com/emoji/2x/guyana-emoji.png',
                  'https://img.icons8.com/emoji/2x/isle-of-man-emoji.png',
                  'https://img.icons8.com/emoji/2x/czechia-emoji.png',
                  'https://img.icons8.com/emoji/2x/brazil-emoji.png',
                  'https://img.icons8.com/emoji/2x/hong-kong-sar-china-emoji.png',
                  'https://img.icons8.com/emoji/2x/germany-emoji.png',
                  'https://img.icons8.com/emoji/2x/zimbabwe-emoji.png',
                  'https://img.icons8.com/emoji/2x/japan-emoji.png'
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
          country: 'Ukraibe'
        }
      }
    };
  }
}
