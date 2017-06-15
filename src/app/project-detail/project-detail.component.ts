import { Component, OnInit } from '@angular/core';
import { Project } from '../project.model';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { DataService } from '../data.service';
import { FirebaseObjectObservable } from 'angularfire2/database';


@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css'],
  providers: [DataService]
})
export class ProjectDetailComponent implements OnInit {
  projectId: string;
  projectToDisplay: any;
  currentProjectStatus: number;
  statusBarNumber: any;

  constructor(private route: ActivatedRoute, private location: Location, private dataService: DataService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.projectId = urlParameters['id'];
    });
  this.dataService.getProjectById(this.projectId).subscribe(dataLastEmittedFromObserver => {this.projectToDisplay = dataLastEmittedFromObserver});

  }

  ngDoCheck() {
    this.statusBarNumber = ((this.projectToDisplay.status / parseInt(this.projectToDisplay.goal)) * 100);
  }


  beginUpdatingStatus(value) {
    this.currentProjectStatus = parseInt(this.projectToDisplay.status) + parseInt(value);
    this.dataService.updateProjectStatus(this.currentProjectStatus, this.projectToDisplay);

    this.statusBarNumber = ((this.currentProjectStatus / parseInt(this.projectToDisplay.goal)) * 100)
  }




}
