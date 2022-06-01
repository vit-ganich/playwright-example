import { Page } from "@playwright/test";

/**
 * Base class for Page Objects
 */
export abstract class BasePage {
  constructor(public readonly page: Page) {
    this.page = page;
  }

  abstract goto(): Promise<void>;
}
