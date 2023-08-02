import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  Adobe =
    'https://firebasestorage.googleapis.com/v0/b/angulardesigns-aaa7c.appspot.com/o/adobe-brands.svg?alt=media&token=c31f9bb5-aa95-4f6a-896e-7d8bc976c7c2';
  Figma =
    'https://firebasestorage.googleapis.com/v0/b/angulardesigns-aaa7c.appspot.com/o/figma-brands.svg?alt=media&token=edef994a-4355-4df8-9af6-eb749d6a1c80';
  Sketch =
    'https://firebasestorage.googleapis.com/v0/b/angulardesigns-aaa7c.appspot.com/o/sketch-brands.svg?alt=media&token=c114bf08-df05-46b2-9a87-642941e3cd66';
  ExperienceTag =
    'Endless possibilities using the latest software Adobe, Figma, and Sketch';
  Name = 'Zdravko Bozhkov';
  Me =
    'I design custom logos, landing pages, animations and dynamic websites for clients. My job involves creating templates for websites and logos for graphic designs, integrated with the latest software tools.';
  Illustrations = 'Illustrations';
  IllustrationsLink = 'https://fir-stream-19493.web.app';
  Dribbble = 'https://dribbble.com/zdravko6t5';
}
