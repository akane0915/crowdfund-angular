import { Injectable } from '@angular/core';
import { Project } from './project.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class DataService {
  projects: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.projects = database.list('projects');
  }

  getProjects() {
    return this.projects;
  }

  getProjectById(projectId: string) {
    return this.database.object('projects/' + projectId);
  }

  sendToDatabase(project: Project) {
    this.projects.push(project);
  }

  updateProject(project) {
    let projectFromFirebase = this.getProjectById(project.$key);
    projectFromFirebase.update({title: project.title,
                              description: project.description,
                              creator: project.creator,
                              goal: project.goal,
                              category: project.category,
                              deadline: project.deadline
                              });
  }

  deleteProject(project) {
    let projectFromFirebase = this.getProjectById(project.$key);
    projectFromFirebase.remove();
  }

  updateProjectStatus(status, project) {
    let projectFromFirebase = this.getProjectById(project.$key);
    projectFromFirebase.update({status: status});
  }

}
