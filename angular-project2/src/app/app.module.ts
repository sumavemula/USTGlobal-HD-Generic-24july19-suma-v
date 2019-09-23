import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SampleComponent } from './sample.component';
import { HeaderComponent } from './header/header.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { TwoWayComponent } from './two-way/two-way.component';
import { from } from 'rxjs';
import { DirectivesComponent } from './directives/directives.component';
import { IfSwitchComponent } from './if-switch/if-switch.component';
import { AttributeDirectivesComponent } from './attribute-directives/attribute-directives.component';
import { MyDirectiveDirective } from './my-directive.directive';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { BikesComponent } from './bikes/bikes.component';
import { BikeDetailsComponent } from './bike-details/bike-details.component';
import { AttrDirComponent } from './attr-dir/attr-dir.component';
import { ToWayComponent } from './to-way/to-way.component';
import { DirComponent } from './dir/dir.component';

@NgModule({
  declarations: [
    AppComponent, SampleComponent, HeaderComponent, DataBindingComponent, TwoWayComponent, DirectivesComponent, IfSwitchComponent, AttributeDirectivesComponent, MyDirectiveDirective, ParentComponent, ChildComponent, BikesComponent, BikeDetailsComponent, AttrDirComponent, ToWayComponent, DirComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
