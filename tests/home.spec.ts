import {test, expect} from '@playwright/test';

test.describe("Landing page and Backend API Health check", () => {

    test.beforeEach(async ({page}, testInfo)=>{
      await page.goto("http://localhost:3000");
    })

    test("Home page loads successfully", async ({page}) => {
        // Click the explore now button
        await page.getByTestId("explore-button").isEnabled();
        // Expects page to have a heading with the name of Installation.
        await expect(page.getByText("DISCOVER YOUR NEXT DREAM PROPERTIES AND PAY WITH EASE")).toBeVisible();
    });

    test("Navigate to Healthcheck and click button", async ({page}) => {
        // Click health check menu
        await page.getByText("API Health check").click();
        //Click the health check button
        await page.getByTestId("health-check-button").click();
        await expect(page.locator("ul > li")).toContainText(["OK", "OK", "OK", "OK", "OK"]);
    });
});
