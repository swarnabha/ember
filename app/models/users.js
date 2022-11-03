import Model, { attr } from '@ember-data/model';

export default class UsersModel extends Model {
  @attr name;
  @attr email;
  // @attr phone;
  // @attr sex;
  // @attr address;
  @attr('date') createdAt;
}


// import DS from 'ember-data';

// export default DS.Model.extend({
//   name: DS.attr('string'),
//   email: DS.attr('string')
// });
