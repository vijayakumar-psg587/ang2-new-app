import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
//Tis is important to make use of jquery lib
import * as $ from 'jquery';

import { AppComponent } from './app.component';
import{ NewComponent} from './newComp/newComp.component';
import { NewCompsComponent } from './new-comps/new-comps.component';

@NgModule({
  declarations: [
    AppComponent,
    NewComponent,
    NewCompsComponent
    //add our component after importing it
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
