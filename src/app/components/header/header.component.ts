import { Component, OnInit, } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css','../../../../node_modules/bootstrap/dist/css/bootstrap.min.css']
})
export class HeaderComponent implements OnInit {
  

  title: string = 'my-app';
  
  constructor() { }

  ngOnInit(): void {
  }

  
  onClick2() {
    console.log("Add2");
  }
  onClick3() {
    console.log("Add3");
  }
  toggleAddTask() {
    console.log("toggle");
  }

}
