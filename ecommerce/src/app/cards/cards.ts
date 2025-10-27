import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  imports: [CommonModule],
  templateUrl: './cards.html',
  styleUrl: './cards.css'
})
export class Cards implements OnInit, OnDestroy {
  days: number = 0;
  hours: number = 0;
  minutes: number = 0;
  seconds: number = 0;

  private interval: any;

  ngOnInit(): void {
    // Example: Flash sale ends in 2 days
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 2);

    this.interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance > 0) {
        this.days = Math.floor(distance / (1000 * 60 * 60 * 24));
        this.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        this.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        this.seconds = Math.floor((distance % (1000 * 60)) / 1000);
      } else {
        this.days = this.hours = this.minutes = this.seconds = 0;
        clearInterval(this.interval);
      }
    }, 1000);
  }

   cards = [
    { title: 'HAVIT HV-G92 Gamepad', price: '$120 $160',star:'⭐⭐⭐⭐⭐ (88)',img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmzD_vb-TeVteRnSS19Ng454fE9zk_bCBjZQ&s' },
     { title: 'HAVIT HV-G92 Gamepad', price: '$120 $160', star: '⭐⭐⭐⭐⭐ (88)', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmzD_vb-TeVteRnSS19Ng454fE9zk_bCBjZQ&s' },
 { title: 'HAVIT HV-G92 Gamepad', price: '$120 $160',star:'⭐⭐⭐⭐⭐ (88)',img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmzD_vb-TeVteRnSS19Ng454fE9zk_bCBjZQ&s' }, { title: 'HAVIT HV-G92 Gamepad', price: '$120 $160',star:'⭐⭐⭐⭐⭐ (88)',img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmzD_vb-TeVteRnSS19Ng454fE9zk_bCBjZQ&s' },  ];
  ngOnDestroy(): void {
    if (this.interval) {
      clearInterval(this.interval);
    }

    
  }
}





