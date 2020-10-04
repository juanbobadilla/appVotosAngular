import { Component, OnInit } from '@angular/core';
import { Link } from './link.models';


@Component({
  selector: 'app-body-component',
  templateUrl: './body-component.component.html',
  styleUrls: ['./body-component.component.css']
})
export class BodyComponentComponent implements OnInit {
  
  //variables
  links:Link[];

  constructor() { 
    this.links =[
      new Link('Angular','http://angular.io',100),
      new Link('YouTube','http://youtube.com',40),
      new Link('Google','http://google.com',30)
    ];
  }

  ngOnInit(): void {
  }

  //metodos
  addLink(title:HTMLInputElement,link:HTMLInputElement){
    if(title.value == "" || link.value == ""){
      alert("ingrese los valores completos");
    }else{
      this.links.push(new Link(title.value,link.value));
      title.value="";
      link.value="";
    }
    
    return false;
  }

}
