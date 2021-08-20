import { Component, OnInit } from '@angular/core';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faInstagramSquare } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  title = 'Mathew Humphrey Portfolio';
  faFacebook = faFacebook;
  faGithub = faGithub;
  faLinkedin = faLinkedin;
  faInstagramSquare = faInstagramSquare;
  spin = false;

  constructor() { }

  ngOnInit(): void {
  }

  haveFun() {
    if (this.spin) {
      this.spin = false;
    } else {
      this.spin = true;
    }
  }

}
