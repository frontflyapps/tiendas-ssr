import { Component, Input, OnInit } from '@angular/core';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { MatCardModule } from '@angular/material/card';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-skeleton-loading-cards',
  templateUrl: './skeleton-loading-cards.component.html',
  styleUrls: ['./skeleton-loading-cards.component.scss'],
  standalone: true,
  imports: [NgFor, MatCardModule, NgxSkeletonLoaderModule],
})
export class SkeletonLoadingCardsComponent implements OnInit {
  grid = {
    xs: 1,
    sm: 2,
    md: 3,
    lg: 4,
  };

  arrayItems = {
    xs: [1],
    sm: [1, 1],
    md: [1, 1, 1],
    lg: [1, 1, 1, 1],
  };

  constructor() {}

  @Input()
  set setConfiguration(data) {
    this.grid = Object.assign({}, data);
    Object.keys(this.arrayItems).map((key) => {
      this.arrayItems[key] = Array(this.grid[key]).fill(1, 0, this.grid[key] - 1);
    });
  }

  ngOnInit() {
    Object.keys(this.arrayItems).map((key) => {
      this.arrayItems[key] = Array(this.grid[key]).fill(1, 0, this.grid[key] - 1);
    });
  }
}
