import Component from '@ember/component';

export default Component.extend({

  // init(){
  //   this._super(...arguments)
  //   this.set('lowercase', this.get('str'))
  // },
  // str: '',
  // lowercase: Ember.computed('str',{
  //   get(key){
  //     return this.get('str').toLowerCase();
  //   },
  //   set(key, value){
  //     this.set('str', value);
  //     return value.toLowerCase();
  //   }
  //
  // }),

  uppercase: Ember.computed('str', {
    get(key) {
      return this.get('str').toUpperCase();
    },
    set(key, value){
      this.set('str', value.toLowerCase());
      return value.toUpperCase();
    }
  })
});
