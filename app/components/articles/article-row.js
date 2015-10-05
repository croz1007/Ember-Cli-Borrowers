import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'tr',
  article: null, //passed-in
  articleStates: null, //passed-in
  actions: {
    saveArticle() {
      let article = this.get('article');
      if(article.get('hasDirtyAttributes')) {
        this.sendAction('save', article);
      }
    }
  },
  setObserver: function() {
    this.addObserver('article.state', this, this.stateChanged);
  }.on('init'),
  stateChanged(){
    var article = this.get('article');
    // console.log(article.get('description') + ' State Changed');
  }
});
