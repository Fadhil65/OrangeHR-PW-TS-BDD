/** Generated from: features\auth\login.feature */
import { test } from "playwright-bdd";

test.describe("Login", () => {

  test.beforeEach(async ({ Given, page }) => {
    await Given("I am on the login page", null, { page });
  });

  test("login without username and password", { tag: ["@regression", "@login", "@negativelogin", "@negative"] }, async ({ When, page, Then }) => {
    await When("User login without username and password", null, { page });
    await Then("User click button login", null, { page });
    await Then("User should see an username error message on login page", null, { page });
    await Then("User should see an password error message on login page", null, { page });
  });

  test("Failed login with invalid username", { tag: ["@regression", "@login", "@negativelogin", "@negative"] }, async ({ When, page, Then }) => {
    await When("User login with invalid username only \"fad\"", null, { page });
    await Then("User click button login", null, { page });
    await Then("User should see an password error message on login page", null, { page });
  });

  test("Failed login with only password", { tag: ["@regression", "@login", "@negativelogin", "@negative"] }, async ({ When, page, Then }) => {
    await When("User login with invalid password only \"admin\"", null, { page });
    await Then("User click button login", null, { page });
    await Then("User should see an username error message on login page", null, { page });
  });

  test("Failed login with valid username and invalid password", { tag: ["@regression", "@login", "@negativelogin", "@negative"] }, async ({ When, page, Then }) => {
    await When("User login with valid username \"Admin\" and invalid password \"Pas\"", null, { page });
    await Then("User click button login", null, { page });
    await Then("User should see an validation credentials message on login page", null, { page });
  });

  test("Login success with valid credentials", { tag: ["@regression", "@login", "@positivelogin", "@positive", "@smoke"] }, async ({ When, page, Then }) => {
    await When("User login with valid username \"Admin\" and valid password \"admin123\"", null, { page });
    await Then("User click button login", null, { page });
    await Then("User should see dashboard on dashboard page", null, { page });
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("features\\auth\\login.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "login without username and password": {"pickleLocation":"12:3","tags":["@regression","@login","@negativelogin","@negative"],"ownTags":["@negative","@negativelogin"]},
  "Failed login with invalid username": {"pickleLocation":"19:3","tags":["@regression","@login","@negativelogin","@negative"],"ownTags":["@negative","@negativelogin"]},
  "Failed login with only password": {"pickleLocation":"25:3","tags":["@regression","@login","@negativelogin","@negative"],"ownTags":["@negative","@negativelogin"]},
  "Failed login with valid username and invalid password": {"pickleLocation":"32:2","tags":["@regression","@login","@negativelogin","@negative"],"ownTags":["@negative","@negativelogin"]},
  "Login success with valid credentials": {"pickleLocation":"38:2","tags":["@regression","@login","@positivelogin","@positive","@smoke"],"ownTags":["@smoke","@positive","@positivelogin"]},
};