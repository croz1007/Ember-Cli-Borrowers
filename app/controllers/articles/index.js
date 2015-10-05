import Ember from 'ember';

export default Ember.Controller.extend({
  possibleStates: ['borrowed', 'returned'],
  contentDidChange: Ember.observer('model.[]', function() {
    console.log('Called when add or remove article');
  }),
  stateDidChange: Ember.observer('model.@each.state', function(){
    console.log('Called when the state changed for ANY article');
  })
});
