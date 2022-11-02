import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class UsersController extends Controller {

    newTitle;

    @action
    addUser() {
      console.log("hi")
      this.store.createRecord('users', {
        title: this.newTitle,
        publishedAt: new Date()
      }).save();
      this.set('newTitle', "");
    }
  
}
