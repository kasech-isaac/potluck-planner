describe('sign up form', () => {
  beforeEach(() => {
  cy.visit('http://localhost:3000/signUp')
  })
  it("signupform", ()=>{
  cy.get('[data-cy=firstName]').type("kasech").should("have.value", "kasech")
  cy.get('[data-cy=lastName]').type("Isaac").should("have.value", "Isaac")
  cy.get('[data-cy=emailId]').type("kasi@123.com").should("have.value", "kasi@123.com")
  cy.get('[data-cy=password]').type("kasi").should("have.value", "kasi")
  cy.get('[data-cy=userType]').select("admin").should("have.value", "admin")
  cy.get('[data-cy=submit]').click
  })
}),
describe('login form', () => {
  beforeEach(() => {
  cy.visit('http://localhost:3000/login')
  })
  it("loginform", ()=>{
 cy.get('[data-cy=emailId]').type("kasi@123.com").should("have.value", "kasi@123.com")
  cy.get('[data-cy=password]').type("kasi").should("have.value", "kasi")
  cy.get('[data-cy=submit]').click
  })
})
