import { Component, OnInit } from '@angular/core';
import *  as $ from 'jquery';
import * as Rellax from 'rellax';
import { Project } from "../../services/portfolio.model";
import { ProjectService } from "../../services/project.service";

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.sass']
})
export class PortfolioComponent implements OnInit {

  selectedType: 'all' | 'angular' | 'django' = 'all'

  projects: Project[];


  constructor(private projectSvc: ProjectService) { }

  ngOnInit() {
    this.projectSvc.get().subscribe(data => {
      this.projects = data
    })

    $(document).ready(function() {
      var rellax = new Rellax('.rellax',{})
    })

  }

}
