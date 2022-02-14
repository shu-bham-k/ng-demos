import { Component } from '@angular/core';
import { AboutInterface, InformationInterface, ProjectStatusInterface, SocialMediaInterface } from 'src/interfaces/interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  aboutPageData: AboutInterface = {

    imgSrc: "assets/avatar.png",

    name: "John Doe",

    role: "Full Stack Developer",

    address: "Bay Area, San Francisco, CA"

  }



  socialMediaPageData: SocialMediaInterface = [

    { socialMediaValue: "https://bootdey.com" },

    { socialMediaValue: "bootday" },

    { socialMediaValue: "@bootday" },

    { socialMediaValue: "bootday" },

    { socialMediaValue: "bootday" },



  ]

  informationPageData: InformationInterface = {

    fullName: "Shubham Singh",

    email: "fip@jukmun.al",

    phone: "(239) 816-9029",

    mobile: "7667856834",

    address: "Bay Area, San Francisco, CA"

  }

  projectStatusPageData: ProjectStatusInterface = [

    {

      label: "Web Design",

      progressValue: 7
    },
    {

      label: "Website Markup",

      progressValue: 70

    },
    {

      label: "One Page",

      progressValue: 80

    },
    {

      label: "Mobile Tempate",

      progressValue: 50

    },
    {

      label: "Backend API",

      progressValue: 60

    }
  ]

}
