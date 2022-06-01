import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  months = ['may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec', 'jan', 'feb', 'mar', 'apr']
  expenses: any[]= [];
  constructor() { }

  ngOnInit(): void {

    this.expenses = [
      {
        title: "mortgage",
        items: [1100,1100,1100,1100,1100,1100,1100,1100,1100,1100,1100,1100]
      },
      {
        title: "gas",
        items: [175,0,175,0,175,0,175,0,175,0,175,0]
      },
      {
        title: "electricity",
        items: [400,0,400,0,400,0,400,0,400,0,400,0]
      }
    ]
  }

}
