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
  projectToDisplay: FirebaseObjectObservable<any>;
  categories;

  constructor(private route: ActivatedRoute, private location: Location, private dataService: DataService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.projectId = urlParameters['id'];
    });
  this.projectToDisplay = this.dataService.getProjectById(this.projectId);
  }

}
