import { Component , computed, signal} from '@angular/core';
import { DUMMY_USERS } from '../../dummy-users';

//This will give random index value from the length od DUMMY_USERS list.
const randomIndex= Math.floor(Math.random() * DUMMY_USERS.length);
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {





  //  selectedUser=DUMMY_USERS[randomIndex];
  //Introduced signals with the initial value
  selectedUser=signal(DUMMY_USERS[randomIndex]);
//Computed is used with singal 
  imagePath= computed(()=>'/assets/users/' + this.selectedUser().avatar )

  //  Below getter method for computing the path of image
  //get keyword marked imagePath as Getter.
  // While using in template file it will used as attribute  (imagePath) not method
  //  get imagePath(){
  //   return computed('/assets/users/' + this.selectedUser.avatar );
  //  }

   //Angular change detection works on library called zone.js
   onSelectUser(){
    const randomIndex= Math.floor(Math.random() * DUMMY_USERS.length);
    // this.selectedUser=DUMMY_USERS[randomIndex];
    this.selectedUser.set(DUMMY_USERS[randomIndex]);
   }
}
