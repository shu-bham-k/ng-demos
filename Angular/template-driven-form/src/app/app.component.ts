import { User } from './user';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  topics = ['Angular','React','Vue'];
  topicHasError = true;

  userModel = new User('Rob', 'rob@test.com',7667856834,'default','morning',true);

  validateTopic(value: any){
    if(value== 'default'){
      this.topicHasError = true;
    }else{
      this.topicHasError=false;
    }
  }
} 
