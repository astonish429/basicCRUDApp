var db = require('../database/config');
//Employee object create
let User = function(user){
  this.name = user.name;
  this.age = user.age;
};

//get all users

    User.findAll = function(result) {
        db.query(`SELECT * FROM usrtbl`, function(err, res){
            if(err) {
            console.log("error: ", err);
            result(null, err);
            }
            else{
            result(null, res);
            }
        });
    }

// finding an user by it's id

    User.findById = function(id, result) {
        db.query(`SELECT * FROM usrtbl WHERE id = ? `, id, function (err, res) {
            if(err) {
            console.log("error: ", err);
            result(err, null);
            }
            else{
            result(null, res);
            }
        });
    }


//creating a new user

    User.create = function (newUser, result) {
        db.query(`INSERT INTO usrtbl set ?`, newUser, function (err, res) {
            if(err) {
            console.log("got error: ", err);
            result(err, null);
            }
            else{
            result(null, res.insertId);
            }
        });
    }



 //update an user

    User.update = function(id, user, result){
        db.query("UPDATE usrtbl SET name=?, age=? WHERE id = ?", [user.name, user.age, id], function (err, res) {
            if(err) {
            console.log("error: ", err);
            result(null, err);
            }else{
            result(null, res);
            }
        });
    }


 //delete an user

    User.delete = function(id, result){
        db.query("DELETE FROM usrtbl WHERE id = ?", [id], function (err, res) {
            if(err) {
            console.log("error: ", err);
            result(null, err);
            }
            else{
            result(null, res);
            }
        });
    }


module.exports= User;