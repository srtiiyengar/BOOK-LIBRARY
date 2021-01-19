import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  template: `
    <h3>
      page-not-found!
    </h3>
  `,
  styles: ['h3{text-align: center;margin-top:100px;}']
})
export class PageNotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
