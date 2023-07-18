/// <reference types="cypress" />
import faker from 'faker';
const firstName = faker.name.findName();
const job = faker.name.jobTitle();

describe('Should test reqres API', () => {
 it('should create a user', () => {
    const reqBody = {
      name: firstName,
      job: job
    };
    cy.request('POST', 'https://reqres.in/api/users', reqBody)
      .then((res) => {
        expect(res.status).to.equal(201);
        expect(res.body.name).to.equal(firstName);
        expect(res.body.job).to.equal(job);
        console.log(res)
        cy.log(`O status code é ${res.status}`)
        cy.log(`O ID é ${res.body.id}`)
        cy.log(`O Nome criado é ${res.body.name}`)
        cy.log(`O Trabalho criado é ${res.body.job}`)
      })
  });
})