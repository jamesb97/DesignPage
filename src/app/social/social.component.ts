import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.scss'],
})
export class SocialComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  Email = 'Email';
  Emailink = 'Email';
  GitHub = 'https://github.com/jamesb97/';
  GitHubsvg =
    'https://firebasestorage.googleapis.com/v0/b/angulardesigns-aaa7c.appspot.com/o/github.svg?alt=media&token=c8d32d5c-d649-4cc2-b9bf-0cc637650500';
  LinkedIn = 'https://linkedin.com/in/zdravkobozhkov/';
  LinkedInsvg =
    'https://firebasestorage.googleapis.com/v0/b/angulardesigns-aaa7c.appspot.com/o/linkedin.svg?alt=media&token=3bf41e64-5a83-433c-badc-c844430f9fb9';
  Instagram = 'https://instagram.com/zbozhkov';
  Instagramsvg =
    'https://firebasestorage.googleapis.com/v0/b/angulardesigns-aaa7c.appspot.com/o/instagram.svg?alt=media&token=8a89cff8-07e5-4e8c-bfe2-4aa383ff4351';
  Twitter = 'https://twitter.com/x6t517902/';
  Twittersvg =
    'https://firebasestorage.googleapis.com/v0/b/angulardesigns-aaa7c.appspot.com/o/twitter-brands.svg?alt=media&token=20b27139-a3c4-40d1-ad40-ad015024fcd2';
}
