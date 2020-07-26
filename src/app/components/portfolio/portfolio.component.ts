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

  types: string[];

  private _selectedType = 'all';

  get selectedType() {
    return this._selectedType;
  }


  set selectedType(newValue : string) {
    if (newValue !== this._selectedType) {
      this._selectedType = newValue;
      this.loadProjects(this._selectedType);
    }
  }


  projects: Project[];


  constructor(private projectSvc: ProjectService) { }

  ngOnInit() {
    this.loadProjects(this._selectedType);

    $(document).ready(function() {
      var rellax = new Rellax('.rellax',{});
    });

  }

  loadProjects(selectedType:string):void{
    this.projectSvc.get().subscribe(data => {
      this.types = data.map(p => p.type).filter((value, index, self) => self.indexOf(value) === index)
      this.projects = data.filter(p=>p.type === selectedType || selectedType === 'all')
    });
  }

}
