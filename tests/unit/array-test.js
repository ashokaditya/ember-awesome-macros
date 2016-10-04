import Ember from 'ember';
import { array } from 'ember-awesome-macros';
import { module, test } from 'qunit';

const {
  get, setProperties
} = Ember;

const Obj = Ember.Object.extend({
  test: array('source', array('source'))
});

let obj;

module('Unit | Macro | array', {
  beforeEach() {
    obj = Obj.create();
  }
});

test('it works', function(assert) {
  assert.expect(1);

  setProperties(obj, {
    source: 'test value'
  });

  assert.deepEqual(get(obj, 'test'), [
    'test value',
    ['test value']
  ]);
});
