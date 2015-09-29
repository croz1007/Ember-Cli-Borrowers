import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    save() {
      console.log("Bubbled up from route");
      return true;
    },
    cancel() {
      console.log("Bubbled up from route");
      return true;
    },
    delete: function(friend) {
      friend.destroyRecord().then(() => {
        this.transitionToRoute('friends.index');
      });
    }
  }
});
