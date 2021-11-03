import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  @Input() companyName = "Agos"
  ceoName = "Steve"
  changeCompanyName() {
    this.companyName = "This Binding works!"
  }
  onKeyUp(event: any) {
    this.ceoName = event.target.value
    }
  constructor() { }

  ngOnInit() {
  }

}