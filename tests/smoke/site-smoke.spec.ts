import { expect, test } from '@playwright/test';

test('page shell and key interactions work', async ({ page }) => {
  await page.goto('/?lang=en');

  await expect(page.getByRole('heading', { name: 'Mikhail Pirahouski' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Explore projects' })).toBeVisible();

  await page.getByRole('button', { name: 'Toggle dark theme' }).click();
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');

  await page.getByRole('button', { name: 'RU' }).click();
  await expect(page.getByRole('heading', { name: 'Материалы' })).toBeVisible();

  await page.getByRole('navigation', { name: 'Main' }).getByRole('link', { name: 'Проекты' }).click();
  await expect(page).toHaveURL(/#projects$/);
});
