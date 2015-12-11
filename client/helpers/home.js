/**
 * Created by richard on 04/12/2015.
 */
Template.home.events({
    'change .myFileInput': function(event, template) {
        FS.Utility.eachFile(event, function(file) {
        Images.insert(file, function (err, fileObj) {
            if (err){
                // handle error
                console.log(err)
            } else {
                // handle success depending what you need to do
                /*var userId = Meteor.userId();
                var imagesURL = {"profile.image": "/cfs/files/images/" + fileObj._id};
                Meteor.users.update(userId, {$set: imagesURL});
                */
                console.log(fileObj);
            }
        });
    });
},
    'click .deleteImage':function(event,template){
        if(confirm('delete this image')) Images.remove( this._id);

    }

});

Template.home.helpers({
    images: function () {
        return Images.find(); // Where Images is an FS.Collection instance
    }
});