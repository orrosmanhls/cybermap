// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

import { RouteMatcher } from 'cypress/types/net-stubbing';

Cypress.Commands.add('login', () => {
  cy.visit('/');
});

export type Method = 'GET' | 'POST' | 'DELETE' | 'PATCH';

Cypress.Commands.add('getHttpRes', (method: Method, url: RouteMatcher, alias: string) => {
  cy.intercept(method, url, (req) => {
    delete req.headers['if-none-match'];
  }).as(alias);
});

Cypress.Commands.add('getByClass', (className: string) => {
  cy.get(`[class*="${className}"]`);
});

Cypress.Commands.add('getByInputName', (name: string) => {
  cy.get(`[name="${name}"]`);
});
