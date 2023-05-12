import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  @Input()
  _input! : String;
  _childMsg = "Hello from child";

  @Output()
  valueHolderEvent: EventEmitter<string> = new EventEmitter();


  ngOnInit(){
    this.valueHolderEvent.emit(this._childMsg);
    
  }


}
