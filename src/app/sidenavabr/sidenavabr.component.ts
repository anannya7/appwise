import { Component, OnInit ,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-sidenavabr',
  templateUrl: './sidenavabr.component.html',
  styleUrls: ['./sidenavabr.component.css']
})
export class SidenavabrComponent implements OnInit {
selectedValue = 'highlights';

@Output() selectTab: EventEmitter<any> = new EventEmitter<any>(); //to pass data from child to parent component

  constructor() { }

  ngOnInit() {
  }
  public pickTab(value): void {
  	this.selectedValue = value;
    this.selectTab.emit(value);
  }

}
