import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-wise',
  templateUrl: './app-wise.component.html',
  styleUrls: ['./app-wise.component.css']
})
export class AppWiseComponent implements OnInit {
  selectedTab='highlights';

  constructor() { }

  ngOnInit() {
  }
  picSelectedTab(value:any){
  	this.selectedTab = value
  	console.log(value)
  	debugger

  }

}
