var Nightmare = require("nightmare");
var expect = require("chai").expect;
var weddingRegistry = require("./models/wedding.js");
describe("Wedding Registry", function() {
  // The default tests in mocha is 2 seconds.
  // Extending it to 30 seconds to have time to load the pages

  this.timeout(30000);
  it("should send user to the heroku app page", function(done) {
    // ID for the login button.
    Nightmare({ show: true })
      .goto("https://jesp-wedding-registry.herokuapp.com/")
      // Click the catalog link
      .click("a[href='/learn/all']")
      // Evaluate the title
      .evaluate(function() {
        return document.title;
      })
      // Asset the title is as expected
      .then(function(title) {
        expect(title).to.equal("guestlist | Wedding Registry");
        done();
      });
  });

  it("should present a link to user page after login", function(done) {
    new Nightmare({ show: true })
      .goto("https://jesp-wedding-registry.herokuapp.com/")
      // Enter username.
      .type("#user_login", "ResilD")
      // Enter password.
      .type("#login__user_password", "dummy*password")
      // Click the login button
      .click("#user_submit")
      // Evaluate the following selector
      .evaluate(function() {
        // Assert the "learn" link can be found
        return document.querySelector("a[href='/learn']");
      })
      .then(function(link) {
        expect(link).to.not.equal(undefined);
        done();
      });
  });



  it("should throw an error for fun", function() {
    throw new Error("Failed on purpose, just to make the Mocha output more interesting.");
  });
});
