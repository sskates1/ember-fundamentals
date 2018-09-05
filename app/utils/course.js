import EmberObject from '@ember/object'
const Course = EmberObject.extend({
  title: "No Title",
  description: "",
  init() {
    this._super( ... arguments);
    this.set('tags', []);
    this.set('languages', []);
  }
});

// Courses.languageName = function () {};

Course.reopenClass({
  _languages: {js: 'JavaScript'},
  languageName(abbrev) {
    return this._languages[abbrev] || 'Unknown'
  }
})

export default Course;
