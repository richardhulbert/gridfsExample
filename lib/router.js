/**
 * Created by richard on 04/12/2015.
 */
Router.configure({
        layoutTemplate: 'layout'

    }
);

Router.route('/',{
    name:'home',
    waitOn: function () {
    return Meteor.subscribe('images')
}});