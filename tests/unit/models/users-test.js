import { module, test } from 'qunit';
import { setupTest } from 'ember-poc/tests/helpers';

module('Unit | Model | users', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    let store = this.owner.lookup('service:store');
    let model = store.createRecord('users', {});
    assert.ok(model);
  });
});
