import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Projects } from 'src/app/interface/IProjects';
import { ProjectsService } from 'src/app/services/projects.service';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss']
})
export class ProjectDetailComponent implements OnInit {

  project! : Projects;
  keyProject! : number;



  constructor(private service : ProjectsService,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.getMyProjectDetail();
  }


  getMyProjectDetail = () =>{

  this.keyProject = Number(this.activatedRoute.snapshot.paramMap.get('key'));
  this.project =  this.service.getMyProjectsByKey(this.keyProject);
  
  }


}
