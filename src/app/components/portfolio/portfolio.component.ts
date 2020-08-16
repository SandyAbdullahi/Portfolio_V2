import { animate, animation, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import *  as $ from 'jquery';
import * as Rellax from 'rellax';
import { Project } from "../../services/portfolio.model";
import { ProjectService } from "../../services/project.service";

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.sass'],
  animations: [
    trigger('it',[
      transition('void => *',[
        style({
          x: -400,
          opacity: 0,
        }),
        animate('1s',
        style({
          x: 0,
          opacity: 1
        }))
      ])
    ]
    )
  ]
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


  constructor(private projectSvc: ProjectService, private route: ActivatedRoute) { }

  ngOnInit() {



    const filter = this.route.snapshot.queryParamMap.get('filter');
    if(filter) {
      this._selectedType = filter;
    };

    this.loadProjects(this._selectedType);
  }

  loadProjects(selectedType:string):void{
    this.projectSvc.get().subscribe(data => {
      this.types = data.map(p => p.type).filter((value, index, self) => self.indexOf(value) === index)
      this.projects = data.filter(p=>p.type === selectedType || selectedType === 'all')
    });
  }

}
