import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.styl']
})
export class RatingComponent implements OnInit {
  @Input("rating") rating: number = 0
  filled = 0
  blank = 5;
  stars = [1, 2, 3, 4, 5];
  constructor() { }
  ngDoCheck() {
    this.filled = Math.floor(this.rating)
  }
  ngOnInit(): void {
  }
  getStarClassName(i: number) {
    let state = 0;
    if (i <= this.filled) {
      state = 10;
    } else if (i - 1 < this.rating && this.rating < i) {
      state = parseInt(((this.rating - this.filled) * 10).toFixed(1));
    }
    return 'bg_star_' + state
  }
}
