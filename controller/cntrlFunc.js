const User = require('../models/userModel');


//exporting findAll function 

    exports.findAll = function(req, res) {
        User.findAll(function(err, user) {
            if (err)
            res.send(err);

            res.send(user);
            });
        }

//exporting create function 

        exports.create = function(req, res) {
            const new_user = new User(req.body);
 
                User.create(new_user, function(err, user) {
                    if (err)
                    res.send(err);
                    res.json({
                        user
                    });
               })
            
            }

  //exporting findById function
            
    exports.findById = function(req, res) {
        User.findById(req.params.id, function(err, user) {
            if (err)
            res.send(err);
            res.json(user);
        });
    }

    //exporting update function

    exports.update = function(req, res) {
        let new_user = new User(req.body);
       User.update(req.params.id, new_user, function(err, user) {
        if (err)
        res.send(err);
        res.json({
            message: 'User updated' 
           });
        }); 
    }

//exporting delet function

    exports.delete = function(req, res) {
        User.delete( req.params.id, function(err, user) {
            if (err)
            res.send(err);
            res.json({
                 message: 'User deleted!!' 
                });
        });
     }