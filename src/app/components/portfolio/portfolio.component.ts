import { Component, OnInit } from '@angular/core';
import *  as $ from 'jquery';
import * as Rellax from 'rellax';


@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.sass']
})
export class PortfolioComponent implements OnInit {

  selectedType: 'all' | 'angular' | 'django' = 'all'



  constructor() { }

  ngOnInit() {
    $(document).ready(function() {
      var rellax = new Rellax('.rellax',{})
    })

  }

}
