/**
 * Created by richard on 11/12/2015.
 */
Template.login.events({
    'submit form': function(evt, tpl) {

        evt.preventDefault();
        var post={
            email:$(evt.target).find('[name=email]').val(),
            password:$(evt.target).find('[name=password]').val()

        };

        Meteor.loginWithPassword(post.email.toLowerCase(), post.password, function(err) {
            if (err) {
            console.log(err);
                return;
            }
            if (Router.current().route.name === 'login') {
                // if we are on the login route, we want to redirect the user
                return Router.go('home');
            }
        });
    }
});
