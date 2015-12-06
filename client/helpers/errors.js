/**
 * Created by richard on 26/11/2015.
 */
Errors = new Mongo.Collection(null);
throwError = function(message) {
    Errors.insert({message: message});
};
Template.errors.helpers({
    errors: function() {
        return Errors.find();
    }
});
