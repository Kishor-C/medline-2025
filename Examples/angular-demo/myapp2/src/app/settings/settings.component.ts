import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-settings',
  imports: [],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.css'
})
export class SettingsComponent implements OnInit{
  //activated route allows you to read query and path parameters
  activated = inject(ActivatedRoute);

  username !: string;

  ngOnInit(): void {
     this.activated.parent?.paramMap.subscribe({
      next : value => this.username = <string>value.get('user')
     })
  }
  
}
