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
import { ParentTwoComponent } from './parent-two/parent-two.component';
import { ChildTwoComponent } from './child-two/child-two.component';
import { Parent3Component } from './parent3/parent3.component';
import { Child3Component } from './child3/child3.component';
import { LifeCyleComponent } from './life-cyle/life-cyle.component';
import { LifeCycleComponent } from './life-cycle/life-cycle.component';
import { TdfDemoComponent } from './tdf-demo/tdf-demo.component';

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
    ChildComponent,
    ParentTwoComponent,
    ChildTwoComponent,
    Parent3Component,
    Child3Component,
    LifeCyleComponent,
    LifeCycleComponent,
    TdfDemoComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
