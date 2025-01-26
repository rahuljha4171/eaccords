import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  imports: [CommonModule, SlickCarouselModule],
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent {
  clientLogos = [
    'assets/logo1.png',
    'assets/logo2.png',
    'assets/logo3.png',
    'assets/logo4.png',
    'assets/logo5.png',
    'assets/logo6.png',
  ];

  currentIndex = 0;
  logosToShow = 4 ;
  totalLogos = this.clientLogos.length;

  nextLogo() {
    this.currentIndex = (this.currentIndex + 1) % (this.totalLogos - this.logosToShow + 1);
  }

  prevLogo() {
    this.currentIndex = (this.currentIndex - 1 + (this.totalLogos - this.logosToShow + 1)) % (this.totalLogos - this.logosToShow + 1);
  }



}
