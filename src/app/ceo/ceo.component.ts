import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ceo',
  templateUrl: './ceo.component.html',
  styleUrls: ['./ceo.component.css']
})
export class CeoComponent implements OnInit {
  @Input() ceoName="Steve"
  
  constructor() { }

  ngOnInit() {
  }

}