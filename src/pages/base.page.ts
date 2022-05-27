import { Page } from "@playwright/test";

export abstract class BasePage {
  constructor(public readonly page: Page) {
    this.page = page;
  }

  abstract goto(): Promise<void>;
}
