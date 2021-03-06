var db = require("../models");
var passport = require("../config/passport");

module.exports = function(app) {

  /* app.post("/api/login", passport.authenticate("local", {successRedirect:"/"})) */
   /* function(req, res) { */
app.post("/api/login", passport.authenticate("local"), function(req, res) { 
     res.json(req.user);
  }); 

  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  app.post("/api/signup", function(req, res) {
    db.Users.create({
      email: req.body.email,
      password: req.body.password
    })
      .then(function() {
        res.redirect("/api/login");
      })
      .catch(function(err) {
        res.status(401).json(err);
      });
  });

  // Route for logging user out
  app.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/");
  });

  // Route for getting some data about our user to be used client side
  app.get("/api/user_data", function(req, res) {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    } else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
        email: req.user.email,
        id: req.user.id
      });
    }
  });
}