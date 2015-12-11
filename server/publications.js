/**
 * Created by richard on 04/12/2015.
 */
Meteor.publish('images',function(){
    return Images.find();
});

