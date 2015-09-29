import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    save() {
      return true;
    },
    cancel() {
      return true;
    },
    delete: function(friend) {
      friend.destroyRecord().then(() => {
        this.transitionToRoute('friends.index');
      });
    }
  }
});
