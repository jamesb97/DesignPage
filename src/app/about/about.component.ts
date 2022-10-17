import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  ExperienceTag =
    'Endless possibilities using the latest software Adobe, Figma, and Sketch';
  Name = 'Zdravko Bozhkov';
  Me =
    'I design custom logos, landing pages, animations and dynamic websites for clients. My job involves creating templates for websites and logos for graphic designs, integrated with the latest software tools.';
  Illustrations = 'Illustrations';
  IllustrationsLink = 'https://multiverse-illustrations.netlify.app/';
  Dribbble = 'https://dribbble.com/zdravko6t5';
}
