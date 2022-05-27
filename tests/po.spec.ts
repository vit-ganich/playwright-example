import { test, expect } from "@playwright/test";
import { PlaywrightDevPage } from "../src/pages/playwright-dev.page";
/**
 * Good topic with some concepts:
 * https://github.com/microsoft/playwright/issues/1604
 */
test("getting started should contain table of contents", async ({ page }) => {
  const playwrightDev = new PlaywrightDevPage(page);

  await playwrightDev.goto();
  await playwrightDev.getStarted();

  await expect(playwrightDev.tocList.get()).toHaveText([
    "🏠",
    "Installation",
    "First test",
    "Configuration file",
    "Writing assertions",
    "Using test fixtures",
    "Using test hooks",
    "VS Code extension",
    "Command line",
    "Configure NPM scripts",
    "Release notes",
  ]);
});

test("should show Page Object Model article", async ({ page }) => {
  const playwrightDev = new PlaywrightDevPage(page);

  await playwrightDev.goto();
  await playwrightDev.pageObjectModel();

  await expect(playwrightDev.article.get()).toContainText(
    "Page Object Model is a common pattern"
  );
});
