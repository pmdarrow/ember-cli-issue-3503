import Ember from 'ember';

export function foo(obj) {
  return obj.foo();
}

export default Ember.HTMLBars.makeBoundHelper(foo);
