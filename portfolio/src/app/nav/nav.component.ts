import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  public headerVisible = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleNav() {
    var hamburger = document.querySelector(".hamburger");
    hamburger?.classList.toggle("is-active");

    document.body.classList.toggle("active");

    if (this.headerVisible) {
      this.headerVisible = false;
    } else {
      this.headerVisible = true;
    }
  }
}
