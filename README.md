# Plantilla Ultrabásica Playwright + VS Code + MCP

Esta es la estructura más simple y directa para realizar automatización de pruebas con **Playwright**, **TypeScript** y **Visual Studio Code**.

---

## 💡 ¿Qué es MCP y para qué sirve en esta plantilla?

**MCP (Model Context Protocol)** es un estándar que permite a asistentes de IA interactuar con herramientas externas. 

En esta plantilla, el servidor **Playwright MCP** le da a la IA la capacidad de:
1. Abrir un navegador web en segundo plano.
2. Hacer clic, rellenar formularios e inspeccionar elementos visualmente.
3. **Generar automáticamente el código del test en TypeScript**.

> ⚠️ **Nota clave sobre el consumo de IA:**
> Solo usas la IA durante la **fase de desarrollo** para redactar tus pruebas. Una vez creado el código dentro de `tests/`, las pruebas se ejecutan de forma tradicional por Playwright (en tu PC o en GitHub Actions) **sin consumir ningún tipo de token o cuota de IA**.

---

## 🛠️ Requisitos previos

1. Descargar e instalar **[Node.js](https://nodejs.org/)** (Versión LTS recomendada).
2. Tener instalado **[Visual Studio Code](https://code.visualstudio.com/)**.

---

## 🚀 Instalación y Puesta en Marcha

1. Descarga e instala las dependencias del proyecto ejecutando en la terminal integrada de VS Code (`Ctrl + ~`):
   ```bash
   npm install
   npx playwright install
   ```

2. Abre la carpeta del proyecto en VS Code. La configuración de MCP ya viene lista en el archivo `.vscode/mcp.json`.

---

## 🧪 Ejecutar los Tests (Sin consumir IA)

Para ejecutar las pruebas en tu máquina:

```bash
# Ejecución en consola
npm test

# Ejecución con interfaz visual interactiva de Playwright
npm run test:ui
```

---

## 🤖 Cómo usar la IA para crear nuevos tests

1. Abre el chat de IA en VS Code (GitHub Copilot Chat / Cline).
2. Pídele lo que necesitas en lenguaje natural:
   > *"Navega a http://bootcampqa.com, busca el formulario de contacto, rellénalo y crea el archivo tests/formulario.spec.ts con la prueba"*
3. Revisa el código generado, guárdalo en la carpeta `tests/` y listo. A partir de ese momento se ejecutará en automático sin IA.

---

## 🔄 Integración Continua (GitHub Actions)

El archivo `.github/workflows/playwright.yml` ya está totalmente configurado. 
Simplemente sube el proyecto a tu repositorio de GitHub (`git push`) y automáticamente ejecutará todos tus tests en versión **Web** (Desktop Chrome) y **Móvil** (Mobile Chrome) tras cada commit.
