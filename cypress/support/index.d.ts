/// <reference types="cypress" />

import { RouteMatcher } from 'cypress/types/net-stubbing';
import { Method } from './commands';

declare global {
  namespace Cypress {
    interface Chainable {
      getHttpRes(method: Method, url: RouteMatcher, alias: string): Chainable<null>;
      getByClass<E extends Node = HTMLElement>(selector: string): Chainable<JQuery<E>>;
      getByInputName<E extends Node = HTMLElement>(
        selector: string
      ): Chainable<JQuery<E>>;
      login(): Chainable<void>;
    }
  }
}
