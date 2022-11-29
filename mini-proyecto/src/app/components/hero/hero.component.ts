import { Component, OnInit } from '@angular/core';
import {ISkills} from 'src/app/interface/ISkills';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  mySkills : ISkills[] = [
    {name:'.Net Core 5',level:'Mid'},
    {name:'ASP .Net Core Mvc 5',level:'Mid'},
    {name:'Javascript',level:'Mid'},
    {name:'NodeJs',level:'Jr'},
    {name:'SQL Server',level:'Mid'},
    {name:'MongoDb',level:'Jr'},
    {name:'Api Rest',level:'Mid'},
  ]


}
