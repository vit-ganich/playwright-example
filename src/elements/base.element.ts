import { Locator, Page } from "@playwright/test";

/**
 * BaseElement wraps a Playwright Locator.
 * This class an contain methods to help with interactions.
 * Useful in case of complex elements with multiple actions.
 */
export abstract class BaseElement {
  constructor(private readonly element: Locator) {}

  get() {
    return this.element;
  }
}
