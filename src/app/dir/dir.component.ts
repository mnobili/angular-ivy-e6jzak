import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dir',
  templateUrl: './dir.component.html',
  styleUrls: ['./dir.component.css']
})
export class DirComponent implements OnInit {
  showContent = true;
  langs = ['it', 'en', 'es'];
  setLang = "it"
  showAll = true;
  showEverything() {
    this.showAll = !this.showAll
  }
  setDefaultLang(el:string) {
    this.setLang = el;
    }
  ngOnInit() {
  }
}