// import Controller from '@ember/controller';
// import { action } from '@ember/object';

// export default class UsersController extends Controller {

//     newTitle;

//     @action
//     submitUser() {
//       alert("hi")
//       // store.createRecord('users', {
//       //   title: this.newTitle,
//       //   publishedAt: new Date()
//       // }).save();
//       // this.set('newTitle', "");
//     }
  
// }

// import Ember from 'ember';

// export default Ember.Controller.extend({
//   actions: {
//     submitBoard: function() {
//       this.createRecord('user', { user: this.get('user'), email: this.get('email')}).save().then(function() {
//         // this.transitionToRoute('boards.index');
//       }.bind(this));
//     }
//   }
// });

import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class MyFormComponet extends Component {
  name = '';
  email = '';


  @action async onSubmit() {
    const data = {
      name: this.name,
      email: this.email
    }
    console.log("data>>>>>>>>",data)
  }
}