import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';
import { Project } from '../project.model';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
  providers: [DataService]
})
export class WelcomeComponent implements OnInit {
  projects: Project[];
  filterByCategory: string = 'all';
  uniqueCategories: string[] = [];

  constructor(public dataService: DataService, public router: Router) { }

  ngOnInit() {
    this.dataService.getProjects().subscribe(dataLastEmittedFromObserver => { this.projects = dataLastEmittedFromObserver;
      this.projects.forEach((project) => {
        if (this.uniqueCategories.includes(project.category)) {
        } else {
          this.uniqueCategories.push(project.category);
        }
      });
    });
  }

  goToDetailPage(clickedProject) {
    this.router.navigate(['projects',clickedProject.$key]);
  }

  onChange(category) {
    this.filterByCategory = category;
  }

}
