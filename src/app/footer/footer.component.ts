import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  socialClasses = ['fa-instagram','fa-twitter','fa-facebook-f'];

  constructor() { }

  ngOnInit(): void {
  }

}
