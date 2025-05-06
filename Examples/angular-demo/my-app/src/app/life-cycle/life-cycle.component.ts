import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-life-cycle',
  standalone: false,
  templateUrl: './life-cycle.component.html',
  styleUrl: './life-cycle.component.css'
})
export class LifeCycleComponent implements OnInit, OnDestroy, OnChanges {
  interval: any;
  @Input()
  username = "Guest";
  constructor() {
    console.log('---constructor()----')
  }
  ngOnInit(): void {
      this.interval = setInterval(()=> {console.log('print every 1s')}, 1000);
      console.log('onInit() - use the variables initialized in the constructor');
  }
  ngOnDestroy(): void {
      console.log('onDestroy() - use this to clear intervals or clean up');
      clearInterval(this.interval);
  }
  ngOnChanges(changes: SimpleChanges): void {
      console.log('onChanges() - use when @Input() is modified')
      console.log('onChanges() is called before onInit if you bind property to the parent & after every changes')
      console.log(changes);
  }
}
