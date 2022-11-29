import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../../services/projects.service';
import {Projects} from  '../../interface/IProjects';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  myProjects!: Projects[];

  constructor(private projectsService: ProjectsService) { }




  ngOnInit(): void {
    this.myProjects =  this.projectsService.getMyProjects();
  }


}
