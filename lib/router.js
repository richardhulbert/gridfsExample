/**
 * Created by richard on 04/12/2015.
 */
Router.configure({
        layoutTemplate: 'layout'

    }
);
var OnBeforeActions;

OnBeforeActions = {
    loginRequired: function(pause) {
        if (!Meteor.userId()) {
            this.render('login');
        }else{
            this.next();
        }
    }
};

Router.onBeforeAction(OnBeforeActions.loginRequired, {
    only: ['home']
});

Router.route('/',{
    name:'home',
    waitOn: function () {
    return Meteor.subscribe('images')
}});

Router.route('/login',{name:'login'});