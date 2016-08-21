import Ember from 'ember';
import config from './config/environment';
const Router = Ember.Router.extend({
    location: config.locationType,
});
Router.map(function() {
    this.route('dashboard', {
        path: '/'
    });
    this.route('fees');
    this.route('account');
    this.route('payments');
    this.route('messages', function() {
        this.route('messageall');
        
        //BAsic CRUD
        this.route('new');
        this.route('edit', {
          path: '/:exam_id/edit'
        });
        this.route('show', {
          path: '/:exam_id/show'
        });
    });

    this.route('home');
    this.route('assignments');
    this.route('exams', function() {
        this.route('index');
        this.route('new');
        this.route('edit', {
          path: '/:exam_id/edit'
        });
        this.route('show', {
          path: '/:exam_id/show'
        });
    });

    this.route('students', function() {
        // this.route('certificate', {path: '/cert'});
        // this.route('corporates');
        // this.route('diploma');
        // this.route('other');
        // this.route('individual');
        //Student CRUD
        this.route('show', {
            path: '/:student_id/show'
        });
        this.route('new');
        this.route('edit', {
            path: '/:student_id/edit'
        });
        //Student Profile Pages
        this.route('feed', {
            path: '/:student_id/feed'
        });
        this.route('marks', {
            path: '/:student_id/marks'
        });
        this.route('assignments', {
            path: '/:student_id/assignments'
        });
        this.route('messages', {
            path: '/:student_id/messages'
        });
        this.route('attendance', {
            path: '/:student_id/attendance'
        });
        // this.route('delete', { path: '/:student_id/delete'});
    });
    //Course Categories
    this.route('categories', function() {
        // Batch Category Pages (Maybe simple index with filter selector? THis is OK for now.)
        this.route('index');
        // this.route('delete', { path: '/:student_id/delete'});
        // Add Actions Later
    });
    //Batch Routes
    this.route('groups', function() {
        // this.route('all');
        this.route('new');
        this.route('addstud');
        // this.route('certificate');
        // this.route('corporates');
        // this.route('diploma');
        // this.route('other');
        // this.route('individual');
        this.route('show', {
            path: '/:group_id/overview'
        });
        this.route('edit', {
            path: '/:group_id/edit'
        });
        this.route('students', {
            path: '/:group_id/students'
        });
        this.route('assignments', {
            path: '/:group_id/assignments'
        });
        this.route('marks', {
            path: '/:group_id/marks'
        });
        this.route('exams', {
            path: '/:group_id/exams'
        });
        this.route('handouts', {
            path: '/:group_id/handouts'
        });
        this.route('fees', {
            path: '/:group_id/fees'
        });
        //  this.route('delete', { path: '/:student_id/delete'});
        //  Add Actions Later
    });
    this.route('marks', function() {
        this.route('index');
    });
    this.route('404', {
        path: '/*path'
    });
    this.route('admin', function() {
        this.route('seeder');
    });
});
export default Router;