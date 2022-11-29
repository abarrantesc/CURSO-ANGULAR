import { Injectable } from '@angular/core';
import {Projects} from '../interface/IProjects';
import {MyProjects} from '../data/mock.projects';


@Injectable({
  providedIn: 'root'
})
export class ProjectsService {


  projects : Projects[] = MyProjects;


  constructor() { }


  getMyProjects = () =>{
    return this.projects;
  }

  getMyProjectsByKey = (key:number) : Projects =>{
    return this.projects.find((x) => x.key === key)!;
  }


}
 