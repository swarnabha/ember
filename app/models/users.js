import Model, { attr } from '@ember-data/model';

export default class UsersModel extends Model {
  @attr title;
  @attr body;
  @attr('date') publishedAt;
}
