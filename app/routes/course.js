import Route from '@ember/routing/route';
// import {ALL_COURSES} from '@mike-works/ember-fundamentals/controllers/application'


export default Route.extend({
  model(params){
    return this.modelFor('application').findBy('slug', params.id)
  }
    // ALL_COURSES.filter(course => course.title == params.id)[0]
});
