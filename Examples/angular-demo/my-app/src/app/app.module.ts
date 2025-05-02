import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TestComponentComponent } from './test-component/test-component.component';
import { DemoComponent } from './demo/demo.component';
import { NameFormatterPipe } from './name-formatter.pipe';
import { FormsModule } from '@angular/forms';
import { Test2Component } from './test2/test2.component';
import { StructuralDirectiveComponent } from './structural-directive/structural-directive.component';
import { ForDemoComponent } from './for-demo/for-demo.component';
import { ImpurePipe } from './impure.pipe';
import { PureAndImpureComponent } from './pure-and-impure/pure-and-impure.component';
import { ToggleDirective } from './toggle.directive';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponentComponent,
    DemoComponent,
    NameFormatterPipe,
    Test2Component,
    StructuralDirectiveComponent,
    ForDemoComponent,
    ImpurePipe,
    PureAndImpureComponent,
    ToggleDirective,
    ParentComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
