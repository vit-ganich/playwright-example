// playwright-dev-page.ts
import { expect, Locator, Page } from "@playwright/test";
import { Element } from "../elements/element";
import { BasePage } from "./base.page";

export class PlaywrightDevPage extends BasePage {
  //#region Locators
  getStartedLink = new Element(
    this.page.locator("a", {
      hasText: "Get started",
    })
  );

  gettingStartedHeader = new Element(
    this.page.locator("h1", {
      hasText: "Getting started",
    })
  );

  pomLink = new Element(
    this.page
      .locator("li", { hasText: "Playwright Test" })
      .locator("a", { hasText: "Page Object Model" })
  );

  tocList = new Element(this.page.locator("article ul > li > a"));
  article = new Element(this.page.locator("article"));
  //#endregion

  async goto() {
    await this.page.goto("https://playwright.dev");
  }

  async getStarted() {
    await this.getStartedLink.get().first().click();

    await expect(this.gettingStartedHeader.get()).toBeVisible();
  }

  async pageObjectModel() {
    await this.getStarted();
    await this.pomLink.get().click();
  }
}
