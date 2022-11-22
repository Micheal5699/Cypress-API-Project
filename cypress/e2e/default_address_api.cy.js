it("POST API testing Using Cypress API plugin", () => {
  cy.api("POST", "https://api-stg.ekenta.com:443/api/authenticate", {
  "login": "ibk",
  "password": "Micheal@me1",
  "rememberMe": true,
}).should((response) => {
  expect(response.status).to.eq(200);
});
});


// it("GET API testing Using Cypress API Plugin", () => {
//   cy.api("GET", "https://api-stg.ekenta.com:443/api/address/user").should((response) => {
//     expect(response.status).to.eq(200);
// });
// });