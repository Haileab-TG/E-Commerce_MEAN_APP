import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  
  _parentMsg : string = "Sent from parent comp";
  _childMsg!: string;



  getEventvalue(msg:string){
    console.log("Get event value in root called")
    this._childMsg = msg;
  }

 
  


}
