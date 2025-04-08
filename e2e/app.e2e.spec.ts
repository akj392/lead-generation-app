import { test, expect } from '@playwright/test';

test('homepage has title and links to about page', async ({ page }) => {
  await page.goto('http://localhost:4200');
  await expect(page).toHaveTitle(/LeadListing/);
  await expect(page).toHaveURL(/.*lead/);
});

test.describe('Navigation Tests', () => {
  test('should navigate to the create page when the Create Lead button is clicked', async ({ page }) => {
    await page.goto('http://localhost:4200');
    await expect(page).toHaveTitle(/LeadListing/);
    await page.locator('#createRouteButton').click();
    await expect(page).toHaveURL(/.*create/);
    await expect(page).toHaveTitle(/LeadCreate/);
    await expect(page.locator("#createButton")).toHaveText('Create');
  });

  test('should navigate to the list page when the Cancel button is clicked on the create page', async ({ page }) => {
    await page.goto('http://localhost:4200/lead/create');
    await expect(page).toHaveURL(/.*create/);
    await expect(page).toHaveTitle(/LeadCreate/);
    await expect(page.locator("#cancelButton")).toHaveText('Cancel');
    await page.locator("#cancelButton").click();
    await expect(page).toHaveTitle(/LeadListing/);
    await expect(page).toHaveURL(/.*lead/);
  });
});

test.describe('Lead Form Submission', () => {
  test('should fill out a form and submit and routes to the list page', async ({ page }) => {
    await page.goto('http://localhost:4200/lead/create');
    await expect(page).toHaveTitle(/LeadCreate/);
    await page.locator('#name').fill('Test Organization');
    await page.locator('#phone').fill('0123456789');
    await page.locator('#email').fill('test@org.com');
    await page.locator('#createButton').click();
    await expect(page).toHaveURL('http://localhost:4200/lead');
    await expect(page).toHaveTitle(/LeadListing/);
  });
});