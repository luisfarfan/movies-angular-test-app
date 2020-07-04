import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple-layout',
  templateUrl: './simple-layout.component.html',
  styleUrls: ['./simple-layout.component.css']
})
export class SimpleLayoutComponent implements OnInit {
  @Input() title: string;

  constructor() {
  }

  ngOnInit(): void {
  }

}
