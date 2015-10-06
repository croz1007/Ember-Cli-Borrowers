import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from 'borrowers/tests/helpers/start-app';

module('Acceptance | friends/new', {
  beforeEach: function() {
    this.application = startApp();
  },

  afterEach: function() {
    Ember.run(this.application, 'destroy');
  }
});

test('visiting /friends/new', function(assert) {
  visit('/friends/new');

  andThen(function() {
    assert.equal(currentURL(), '/friends/new');
  });
});

// test('Creating a new friend', function(assert){
//   visit('/');
//   click('a[href="/friends/new"]');
//   andThen(function(){
//     assert.equal(currentPath(), 'friends.new');
//   });
//   fillIn('input[placeholder="First Name"]', 'Johnny');
//   fillIn('input[placeholder="Last Name"]', 'Cash');
//   fillIn('input[placeholder="Email"]', 'j@cash.com');
//   fillIn('input[placeholder="Twitter"]', 'jcash');
//   click('input[value="Save"]');
//
//   andThen(function(){
//     assert.equal(currentRouteName(), 'friends.show.index', 'Redirects to friend.show after create');
//   });
// });

test('Clicking save without filling fields', function(assert){
  visit('/friends/new');
  click('input[value="Save"]');
  andThen(function(){
    assert.equal(currentRouteName(), 'friends.new', 'Stays on new page');
    assert.equal(find("h2:contains(You have to fill all the fields)").length, 1, "Displays error message");
  });
});
