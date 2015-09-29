import Ember from 'ember';

export default Ember.Controller.extend({
  isValid: Ember.computed(
    'model.description',
    'model.notes',
    {
      get() {
        return !Ember.isEmpty(this.get('model.description')) &&
          !Ember.isEmpty(this.get('model.notes'));
      }
    }
  ),
  actions: {
    save() {
      if(this.get('isValid')) {
        return true;
      } else {
        this.set('errorMessage', 'You have to fill all the fields.');
      }
      return false;
    },
    cancel() {
      return true;
    }
  }
});
