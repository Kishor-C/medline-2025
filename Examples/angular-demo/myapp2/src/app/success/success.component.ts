import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-success',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './success.component.html',
  styleUrl: './success.component.css'
})
export class SuccessComponent implements OnInit {
 // activated route can read the data from the route parameters like path
 // or query params
 _activatedRoute : ActivatedRoute = inject(ActivatedRoute);
  username !: string;
  ngOnInit(): void {
      // read the query parameter and set the value to the username
      // this._activatedRoute.queryParamMap.subscribe({
      //   next : value => this.username = <string>value.get('user')
      // });
      this._activatedRoute.paramMap.subscribe({
        next: value => this.username = <string>value.get('user'),
      });
  }

}
