import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.css'],
  providers: [DataService]
})
export class EditProjectComponent implements OnInit {
  @Input() selectedProject;

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit() {

  }

  beginUpdate(projectToUpdate) {
    this.dataService.updateProject(projectToUpdate);
    this.router.navigate(['']);
  }

}
