import { Component, OnInit } from '@angular/core';
import { Project } from '../project.model';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.css'],
  providers: [DataService]
})
export class NewProjectComponent implements OnInit {
  newCategory:any[] = [];


  constructor(private dataService: DataService, private router: Router, private location: Location) { }

  ngOnInit() {
  }

  submitForm(title: string, description:string, creator:string, goal:number, category:string[], deadline:string) {
    this.newCategory.push(category)
    let newProject: Project = new Project(title, description, creator, goal, this.newCategory, deadline);
    this.dataService.sendToDatabase(newProject);
    this.router.navigate(['']);
  }

}
