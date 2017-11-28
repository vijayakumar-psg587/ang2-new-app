import {Component} from '@angular/core';
import{Artist} from './artist';


@Component({
    selector:"app-new-component",
    //Give the html files location properly
    templateUrl: "./newComp.component.html"
    
})
export class NewComponent{
    debugger;
    
    artistDetails:Array<Artist> = [ (new Artist("Vijay","acuostic","test")), new Artist("Vijay1","acuostic1","test1")];
    selectedArtist:Artist = <Artist> this.artistDetails[0];    
}