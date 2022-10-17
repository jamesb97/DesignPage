import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.scss']
})
export class SocialComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  Email = 'zdravko6t5@gmail.com';
  GitHub = 'https://github.com/jamesb97/';
  LinkedIn = 'https://linkedin.com/in/zdravkobozhkov/';
  Instagram = 'https://instagram.com/zbozhkov';
  Twitter = 'https://twitter.com/zdravko6t5';
}
