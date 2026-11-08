import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: false,
  retries: 0,
  workers: undefined,
  reporter: 'html',
  use: {
    // El navegador esta no visible para ejecutar en Github. 
    // Cambia a true si quieres que se abra el navegador en local.
    headless: true,

    // Guardar trazas siempre que falle el test
    trace: 'retain-on-failure',

    // Tomar captura de pantalla solo si falla
    screenshot: 'only-on-failure',

    // Grabar vídeo siempre en todas las ejecuciones
    video: 'on',
  },
  projects: [
    {
      name: 'Desktop Chrome',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'Mobile Chrome',
      use: { ...devices['Pixel 5'] },
    },
  ],
});