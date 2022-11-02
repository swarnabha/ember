import { module, test } from 'qunit';
import { setupTest } from 'ember-poc/tests/helpers';

module('Unit | Route | users', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:users');
    assert.ok(route);
  });
});
