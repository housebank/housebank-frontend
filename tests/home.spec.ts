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
        test.slow();
        // Click health check menu
        await page.getByText("API Health check").click();
        await page.waitForTimeout(10000);
        //Click the health check button
        await page.getByRole("button", {name: "Check Now"}).click();
        await expect(page.locator("ul > li")).toContainText(["OK", "OK", "OK", "OK", "OK"]);
    });
});
