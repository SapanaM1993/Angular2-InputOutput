import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  inputs:[`parentData`]
})
export class ChildComponent implements OnInit {

  parentData:string;

  constructor() { }

  ngOnInit() {
  }

}
