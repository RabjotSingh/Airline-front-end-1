import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-passenger',
  templateUrl: './add-passenger.component.html',
  styleUrls: ['./add-passenger.component.css']
})
export class AddPassengerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public fieldArray: Array<any> = [];
    public newAttribute: any = {};
    public selectValue : any;
    public selectValue1 :any;

    addFieldValue() {
        this.fieldArray.push(this.newAttribute)
        this.newAttribute = {};
    }

    deleteFieldValue(index: number) {
        this.fieldArray.splice(index, 1);
    }

    
    getselectedValue(){
      
      this.selectValue = (<HTMLInputElement>document.getElementById('newAttributePClass')).value;
      
      
    }

    getselectedValue1(){
      this.selectValue1 = (<HTMLInputElement>document.getElementById('classAttribute')).value;
    }

}
