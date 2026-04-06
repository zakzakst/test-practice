import { test, expect } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto("http://localhost:3000/todos/1");
  await expect(page.locator("p")).toContainText("delectus aut autem");
});
