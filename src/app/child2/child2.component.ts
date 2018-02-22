import { Component, OnInit ,Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css'],
  outputs:[`childEvent`]
})
export class Child2Component implements OnInit {

  childEvent = new EventEmitter();
  onchange(value:string){
    this.childEvent.emit(value);
  }

  constructor() { }

  ngOnInit() {
  }

}
