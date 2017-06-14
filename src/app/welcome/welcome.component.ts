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
  projects: FirebaseListObservable<any[]>;

  constructor(public dataService: DataService, public router: Router) { }

  ngOnInit() {
    this.projects = this.dataService.getProjects();
  }

  goToDetailPage(clickedProject) {
    this.router.navigate(['projects',clickedProject.$key]);
  }

}
