// Requiring path to so we can use relative routes to our HTML files
var path = require("path");

// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {
//middleware

app.get("/",function(req, res) {
  // If the user already has an account send them to the members page
  // if (req.user) {
  //   /* res.redirect("/members"); */
  // }
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

app.get("/sellerInfo", isAuthenticated,function(req, res) {
  // If the user already has an account send them to the sellerInfo page
  // if (req.user) {
  //   /* res.redirect("/members"); */
  // }
  res.sendFile(path.join(__dirname, "../public/sellerInfo.html"));
});


  // app.get("/", isAuthenticated,function(req, res) {
  //   // If the user already has an account send them to the members page
  //   if (req.user) {
  //     /* res.redirect("/members"); */
  //   }
  //   res.sendFile(path.join(__dirname, "../public/signup.html"));
  // });

  app.get("/login", function(req, res) {
    // If the user already has an account send them to the members page

    res.sendFile(path.join(__dirname, "../public/login.html"));
  });
  app.get("/signup", function(req, res) {
    // If the user already has an account send them to the members page

    res.sendFile(path.join(__dirname, "../public/signup.html"));
  });
  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/members", isAuthenticated, function(req, res) {
    res.sendFile(path.join(__dirname, "../public/members.html"));
  });

  app.get("/sell",function(req, res) {
 
    res.sendFile(path.join(__dirname, "../public/sell.html"));
  });

  app.get("/about",function(req, res) {
 
    res.sendFile(path.join(__dirname, "../public/about.html"));
  });

  app.get("/contact us",function(req, res) {
 
    res.sendFile(path.join(__dirname, "../public/contact.html"));
  });

  app.get("/events",function(req, res) {
 
    res.sendFile(path.join(__dirname, "../public/events.html"));
  });

  app.get("/gallery",function(req, res) {
 
    res.sendFile(path.join(__dirname, "../public/gallery.html"));
  });

  app.get("/links",function(req, res) {
 
    res.sendFile(path.join(__dirname, "../public/links.html"));
  });

  app.get("/details/:id", function(req, res) {
 
    res.sendFile(path.join(__dirname, "../public/details.html"))
  });

  app.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/");
  });





};
