import { test, expect } from '@playwright/test';

test('Visitar página de inicio', async ({ page }) => {
  // 1. Ir a la web
  await page.goto('https://cafeqaexperience.lovable.app/');

  // 2. Comprobar que la URL contiene la palabra clave de forma parcial
  await expect(page).toHaveURL(/cafeqaexperience/);

  // 3. Comprobar el texto directamente en la página con getByText (más limpio y robusto)
  // 3. Comprobar el enlace del logo del header usando getByRole de forma única
  await expect(page.getByRole('link', { name: 'Café Aurora' })).toBeVisible();
});
