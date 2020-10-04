import { Component, OnInit ,Input} from '@angular/core';
import { Link } from '../body-component/link.models';


@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.css']
})
export class LinkComponent implements OnInit {
  //se genera una entrada al componente
  @Input() link:Link;


  constructor() {}

  ngOnInit(): void {
    
  }
  
  
  

}
