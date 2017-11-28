import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-new-comps',

  //instead of using tempate Url to point to the html file, we cna use the tempalte attribute
  //with an already existing template. Note incase if the html file contains more than the predefined tempalte
  //then its better to write code in the html file and use the templateUrl attribute
  templateUrl: './new-comps.component.html',
  styleUrls: ['./new-comps.component.css']
})
export class NewCompsComponent implements OnInit {
  allowButton = false;
  onCallFunctionString = '';
  enteredValue='';
  constructor() { 
    setTimeout(() => {
      this.allowButton = true;
    },2000);

  }
  
  
  ngOnInit() {
  }
  
  public onClickSampleFunction (){
     this.onCallFunctionString="sdfdsfdsfdsf";
     
  }

  public onEnteringText(event:any){
      this.enteredValue = (<HTMLInputElement>event.target).value;

  }

}
