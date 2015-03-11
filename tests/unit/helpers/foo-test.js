import {
  foo
} from '../../../helpers/foo';
import { module, test } from 'qunit';

module('FooHelper');

test('it returns the result of the obj foo method', function(assert) {
  var obj = {
    foo: function() {return true;}
  };
  assert.ok(foo(obj));
});
