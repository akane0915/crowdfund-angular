import { Pipe, PipeTransform } from '@angular/core';
import { Project } from './project.model';

@Pipe({
  name: 'catFilter',
  pure: false
})
export class CatFilterPipe implements PipeTransform {

  transform(valueArray: Project[], desiredCategory: string) {
    let output: Project[] = [];
    if (desiredCategory !== "all") {
      valueArray.forEach((project) => {
        if (project.category === desiredCategory) {
          output.push(project);
        }
      });
      return output;
    } else {
        return valueArray;
      }
    }
  }
