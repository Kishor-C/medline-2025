import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-life-cycle',
  standalone: false,
  templateUrl: './life-cycle.component.html',
  styleUrl: './life-cycle.component.css'
})
export class LifeCycleComponent implements OnInit, OnDestroy, OnChanges {
  @Input()
  username = "Guest";
  constructor() {
    console.log('---constructor()----')
  }
  ngOnInit(): void {
      console.log('onInit() - use the variables initialized in the constructor');
  }
  ngOnDestroy(): void {
      console.log('onDestroy() - use this to clear intervals or clean up');
  }
  ngOnChanges(changes: SimpleChanges): void {
      console.log('onChanges() - use when @Input() is modified')
      console.log('onChanges() is called before onInit if you bind property to the parent & after every changes')
      console.log(changes);
  }
}
